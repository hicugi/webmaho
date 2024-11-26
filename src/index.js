import path from "path";
import fs from "fs";
import CleeanCSS from "clean-css";

console.log(
  "Starting to watch the template dir.\nMake a change to build HTML in the public dir."
);

const DATA_DIR = path.join("src", "data");
const TEMPLATE_DIR = path.join("src", "template");
const BUILD_DIR = path.join("public");

const BUILD_RESULT = path.join(BUILD_DIR, "index.html");

const replaceValues = (template, key, value) => {
  const rgx = new RegExp(`{{\\s*${key}\\s*}}`, "g");
  return template.replace(rgx, value);
};

const getTemplate = (name) => path.join(TEMPLATE_DIR, `${name}.html`);
const getDataJson = (name) => path.join(DATA_DIR, `${name}.json`);

async function getContacts() {
  const template = await fs.promises.readFile(getTemplate("contacts"), "utf-8");
  const data = await fs.promises.readFile(getDataJson("contacts"), "utf-8");

  let contacts;

  try {
    contacts = JSON.parse(data);
  } catch (err) {
    console.error(err);
    return;
  }

  let result = "";
  for (const item of contacts) {
    let value = replaceValues(template, "title", item.title);
    value = replaceValues(value, "alias", item.alias);
    value = replaceValues(value, "link", item.link);

    result += value;
  }

  return result;
}

async function getCatalog() {
  const template = await fs.promises.readFile(getTemplate("catalog"), "utf-8");
  const data = await fs.promises.readFile(getDataJson("catalog"), "utf-8");

  let items;

  try {
    items = JSON.parse(data);
  } catch (err) {
    console.error(err);
    return;
  }

  const keys = [
    "title",
    "company",
    "link",
    "image",
    "imageWebp",
    "date",
    "description",
  ];

  const ssrItems = items.splice(0, 9);

  const generateHtml = (items) => {
    let result = "";
    for (const item of items) {
      let value = template;

      keys.forEach((key) => {
        value = replaceValues(value, key, item[key]);
      });

      const prettyDate = new Date(item.date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
      value = replaceValues(value, "datePretty", prettyDate);

      result += value;
    }
    return result;
  };

  const fetchData = generateHtml(items);
  fs.promises.writeFile(path.join(BUILD_DIR, "catalog.html"), fetchData);

  return generateHtml(ssrItems);
}

const build = async () => {
  const timeStart = new Date().getTime();

  let result = await fs.promises.readFile(getTemplate("index"), "utf-8");

  const contacts = await getContacts();
  result = replaceValues(result, "contacts", contacts);

  const catalog = await getCatalog();
  result = replaceValues(result, "catalog", catalog);

  result = replaceValues(result, "timestamp", new Date().getTime());

  await fs.promises.access(BUILD_DIR).catch(() => fs.promises.mkdir(BUILD_DIR));

  await fs.promises.writeFile(BUILD_RESULT, result);

  const value = ((new Date().getTime() - timeStart) / 1000).toFixed(2);
  console.log(`Build time: ${value}s`);
};

fs.watch(DATA_DIR, build);
fs.watch(TEMPLATE_DIR, build);

const CSS_DIR = path.join(BUILD_DIR, "assets", "css");
const styleFile = path.join(CSS_DIR, "style.css");
fs.watch(styleFile, async () => {
  const data = await fs.promises.readFile(styleFile);
  const output = new CleeanCSS({}).minify(data);

  fs.promises.writeFile(path.join(CSS_DIR, "style.min.css"), output.styles);

  console.log("style.min.css generated");
});

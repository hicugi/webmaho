import path from "path";
import fs from "fs/promises";

const DATA_DIR = path.resolve("src/data");
const TEMPLATE_DIR = path.resolve("src/template");
const OUTPUT_FILE = path.resolve("README.md");
const IMAGE_URL_PATH = "public/";

const getTemplate = (name) => path.resolve(TEMPLATE_DIR, `${name}.md`);
const getDataJson = (name) => path.resolve(DATA_DIR, `${name}.json`);

function replaceValues(str, obj) {
  let res = str;

  for (const key in obj) {
    res = res.replaceAll(`{{ ${key} }}`, obj[key]);
  }

  return res;
}

const catalog = await (async () => {
  const data = await fs.readFile(getDataJson("catalog"), "utf-8");
  const template = await fs.readFile(getTemplate("catalog"), "utf-8");

  const items = JSON.parse(data);

  const res = [];
  const keys = ["description", "date", "company"];

  for (const item of items) {
    const info = [];
    for (const key of keys) {
      let val = item[key];
      if (!val) continue;

      val = val.replaceAll("\n", "\n  ");

      info.push(`- ${val}`);
    }

    res.push(replaceValues(template, {
      title: item.title,
      info: info.join("\n"),
      image: IMAGE_URL_PATH + item.image,
      link: item.link,
    }));
  }

  return res.join("<hr />\n\n");
})();

const mainTemplate = await (async () => {
  const template = await fs.readFile(getTemplate("readme"), "utf-8");

  return replaceValues(template, {
    CATALOG: catalog,
  });
})();

console.log(mainTemplate)

fs.writeFile(OUTPUT_FILE, mainTemplate);

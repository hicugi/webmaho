import path from "path";
import fs from "fs";

const DATA_DIR = path.join("src", "data");
const TEMPLATE_DIR = path.join("src", "template");
const BUILD_DIR = path.join("public");

const CONTACTS_FILENAME = "contacts.json";

const TEMPLATE = path.join(TEMPLATE_DIR, "index.html");
const TEMPLATE_CONTACTS = path.join(TEMPLATE_DIR, "contacts.html");

const BUILD_RESULT = path.join(BUILD_DIR, "index.html");

const replaceValues = (template, key, value) => {
  const rgx = new RegExp(`{{\\s*${key}\\s*}}`, "g");
  return template.replace(rgx, value);
};

async function getContacts() {
  const template = await fs.promises.readFile(TEMPLATE_CONTACTS, "utf-8");
  const data = await fs.promises.readFile(
    path.join(DATA_DIR, CONTACTS_FILENAME),
    "utf-8"
  );

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

const build = async () => {
  const timeStart = new Date().getTime();

  let result = await fs.promises.readFile(TEMPLATE, "utf-8");

  const contacts = await getContacts();
  result = replaceValues(result, "contacts", contacts);

  await fs.promises.access(BUILD_DIR).catch(() => fs.promises.mkdir(BUILD_DIR));

  await fs.promises.writeFile(BUILD_RESULT, result);

  const value = ((new Date().getTime() - timeStart) / 1000).toFixed(2);
  console.log(`Build time: ${value}s`);
};

fs.watch(DATA_DIR, build);
fs.watch(TEMPLATE_DIR, build);

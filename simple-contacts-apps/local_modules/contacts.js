import fs from "fs";
import ReadLine from "readline";
import { stdin as input, stdout as output } from "process";

const rl = ReadLine.createInterface({ input, output });
const question = (quest) => {
  return new Promise((resolve) => {
    rl.question(`${quest}`, (ans) => {
      resolve(ans);
    });
  });
};

const checkDir = (dirPath) => {
  new Promise((resolve) => {
    if (!fs.existsSync(dirPath)) resolve(fs.mkdirSync(dirPath));
  });
};

const checkFilePath = (filePath) => {
  new Promise((resolve) => {
    if (!fs.existsSync(filePath))
      resolve(fs.writeFileSync(filePath, "[]", "utf-8"));
  });
};

const checkPath = () => {
  const dirPath = "data/";
  const filePath = "data/contacts.json";

  checkDir(dirPath);
  checkFilePath(filePath);
};

const addData = (data) => {
  const dataBuffer = fs.readFileSync("data/contacts.json", "utf-8");
  const contactsJSON = JSON.parse(dataBuffer);

  const isDuplicate = contactsJSON.find(
    (contact) => contact.name === data.name
  );

  if (isDuplicate) {
    console.log("Nama sudah terdaftar!!");
    rl.close();
    return false;
  }

  contactsJSON.push(data);
  fs.writeFileSync("data/contacts.json", JSON.stringify(contactsJSON), "utf-8");

  rl.close();
};

export { addData, question, checkPath };

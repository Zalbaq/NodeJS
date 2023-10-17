import fs from "fs";
import ReadLine from "readline";
import { stdin as input, stdout as output } from "process";
import { addAbortSignal } from "stream";

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

const checkFile = (filePath) => {
  new Promise((resolve) => {
    if (!fs.existsSync(filePath))
      resolve(fs.writeFileSync(filePath, "[]", "utf-8"));
  });
};

const checkPath = () => {
  const dirPath = "data";
  const filePath = "data/contacts.json";

  checkDir(dirPath);
  checkFile(filePath);
};

const loadContact = () => {
  const dataBuffer = fs.readFileSync("./data/contacts.json", "utf-8");
  const contactsJSON = JSON.parse(dataBuffer);
  return contactsJSON;
};

const pushData = (data) => {
  const contactsJSON = loadContact();
  const isDuplicate = contactsJSON.find(
    (contact) => contact.name === data.name
  );

  if (isDuplicate) {
    console.log("Nama sudah terdaftar!!");
  } else {
    contactsJSON.push(data);
    fs.writeFileSync(
      "data/contacts.json",
      JSON.stringify(contactsJSON),
      "utf-8"
    );
    console.log("Terimakasih telah memasukkan data anda");
  }
  rl.close();
};

const listData = () => {
  const contacts = loadContact();
  contacts.forEach((contact, i) => {
    console.log(
      `${i + 1}. ${contact.name} - ${contact.age} - ${contact.noHp} - ${
        contact.email
      }`
    );
  });
  rl.close()
};

export { pushData, question, checkPath, listData };

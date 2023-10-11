const fs = require("fs");
const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

const interface = readline.createInterface({ input, output });
const soal = (pertanyaan) => {
  return new Promise((resolve) => {
    interface.question(`${pertanyaan}`, (ans) => {
      resolve(ans);
    });
  });
};

const addData = (data) => {
  const dataBuffer = fs.readFileSync("contacts.json", "utf-8");
  const dataJSON = JSON.parse(dataBuffer);
  dataJSON.push(data);
  fs.writeFileSync("contacts.json", JSON.stringify(dataJSON), "utf-8");
};

const main = async () => {
  const data = {};
  data.nama = await soal("Masukkan nama anda: ");
  data.umur = await soal("Masukkan umur anda: ");
  data.noHp = await soal("Masukkan no HP anda: ");

  addData(data);
  interface.close();
};
main();

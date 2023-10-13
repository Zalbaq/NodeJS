import yargs from "yargs";
import { addData, question, checkPath } from "./local_modules/contacts.js";
import { hideBin } from "yargs/helpers";
import { oneLine } from "./local_modules/oneLineInterface.js";

const argv = Object.keys(yargs(hideBin(process.argv)).argv); // Menjadikan objek agar bisa melakukan destructuring
const lengthArgv = [...argv].length; // Destructuring objek menjadi array dan mengambil length nya

const main = async () => {
  if (lengthArgv <= 2) {
    const data = {};
    checkPath();
    data.nama = await question("Masukkan nama anda: ");
    data.umur = await question("Masukkan umur anda: ");
    data.noHp = await question("Masukkan no HP anda: ");
    data.email = await question("Masukkan email anda: ");

    return addData(data) ? true : false;
  } else {
    oneLine();
  }
  console.log("Terimakasih sudah memasukkan data anda");
};
main();

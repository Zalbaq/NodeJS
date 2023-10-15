import { pushData, question } from "./contacts.js";

const setupMultiLine = async () => {
  const data = {};

  data.name = await question("Masukkan nama anda: ");
  data.age = await question("Masukkan umur anda: ");
  data.noHp = await question("Masukkan no HP anda: ");
  data.email = await question("Masukkan email anda: ");
  pushData(data);
  return false;
};
export { setupMultiLine };

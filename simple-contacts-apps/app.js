import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { checkPath } from "./contacts.js";
import { setupOneLine } from "./oneLineInterface.js";
import { setupMultiLine } from "./multiLineInterface.js";

const argv = yargs(hideBin(process.argv)).argv;
const { setupComand } = setupOneLine;

const main = async () => {
  checkPath();
  argv._.length === 0 ? setupMultiLine() : setupComand();
};

main();

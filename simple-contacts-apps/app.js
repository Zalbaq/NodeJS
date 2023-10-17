import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { checkPath } from "./contacts.js";
import { setupComand } from "./oneLineInterface.js";
import { setupMultiLine } from "./multiLineInterface.js";

const argv = yargs(hideBin(process.argv)).argv;

const main = () => {
  checkPath();
  argv._.length === 0 ? setupMultiLine() : setupComand();
};

main()

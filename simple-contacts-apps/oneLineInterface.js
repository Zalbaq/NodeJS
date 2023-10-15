import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { pushData, listData } from "./contacts.js";

const cli = yargs(hideBin(process.argv));

const addComand = () => {
  return {
    command: "add",
    describe: "add contacts data",
    builder: {
      name: {
        describe: "your Name",
        demandOption: true,
        type: "string",
      },
      age: {
        describe: "your Age",
        demandOption: true,
        type: "number",
      },
      noHp: {
        describe: "your phone number",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "your email",
        demandOption: false,
        type: "string",
      },
    },
    handler: (argv) => {
      const contacts = {
        name: argv.name,
        age: argv.age,
        noHp: argv.noHp,
        email: argv.email,
      };
      pushData(contacts);
    },
  };
};

const listCommand = () => {
  return {
    command: "list",
    describe: "show all contacts data",
    handler: () => {
      listData();
    },
  };
};

const setupComand = async () => {
  return new Promise((resolve) => {
    resolve(cli.command(addComand()).command(listCommand()).parse());
  });
};
export const setupOneLine = { setupComand };

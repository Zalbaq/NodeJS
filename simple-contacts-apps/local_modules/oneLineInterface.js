import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { addData } from "./contacts.js";

const cli = yargs(hideBin(process.argv));

const oneLine = () => {
  // comand 1
  return new Promise((resolve) => {
    resolve(
      cli
        .command({
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
            addData(contacts);
          },
        })
        .parse()
    );
  });
};

export { oneLine };

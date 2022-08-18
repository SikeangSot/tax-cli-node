#!/usr/bin/env node
import fs from "fs";
import yargs from "yargs";
import { exit } from "process";
import parser from "./taxParser.js";
import taxCalculate from "./taxCalculator.js";
import { hideBin } from "yargs/helpers";

const yargsInstance = yargs(hideBin(process.argv));
const { file, user, type } = yargsInstance.argv;

export const generateTaxReport = () => {
  yargsInstance
    .usage("Usage: tax-cli --user=yourUser --type=yourType --file=yourFile")
    .option("user", {
      describe: "Please specify the user id,e.g. --user=123",
      type: "string",
      demandOption: true,
    })
    .option("type", {
      describe: "Please specify the tax type, e.g. --type=PAYROLL",
      type: "string",
      demandOption: true,
    })
    .option("file", {
      describe: "Please specify the data file, e.g. --file=tax.csv",
      type: "file",
      demandOption: true,
    }).argv;

  try {
    const stream = fs.createReadStream(file);
    taxCalculate(stream, parser(user, type), function (total) {
      console.log(`For tax ${type}, customer ${user} has declared $${total}`);
    });
  } catch (error) {
    console.error(error);
    exit(1);
  }
};

generateTaxReport()

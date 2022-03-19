import * as fs from "fs";
import "dotenv/config";
import "colors";

async function writeToFile(message) {
  const LOG_FILE = process.env.LOG_FILE || null;
  if (LOG_FILE) fs.writeFileSync(LOG_FILE, `${message}\n`, { flag: "a+" });
}

/** Obfuscate the given string starting from the given char position. **/
export function obfuscate(string, prefix_length = 5) {
  const prefix = string.substring(0, prefix_length);
  const sufix = string.substring(prefix_length + 1).replace(/./g, "*");

  return `${prefix}${sufix}`;
}

/** Prints the given `msg` if the `LOG_LEVEL` is "debug". **/
export function logVar(msg) {
  const LOG_LEVEL = process.env.LOG_LEVEL || "info";

  if (["debug"].includes(LOG_LEVEL.toLowerCase())) {
    console.log(msg);
    writeToFile(`DEBUG: ${msg}`);
  }
}

/** Prints the given `msg` if the `LOG_LEVEL` is "info" or higher. **/
export function logInfo(msg) {
  const LOG_LEVEL = process.env.LOG_LEVEL || "info";
  const LOG_FILE = process.env.LOG_FILE || null;

  if (["debug", "info"].includes(LOG_LEVEL.toLowerCase())) {
    console.log(msg.green);
    writeToFile(`INFO: ${msg}`);
  }
}

/** Prints the given `msg` if the `LOG_LEVEL` is "warn" or higher. **/
export function logWarn(msg) {
  const LOG_LEVEL = process.env.LOG_LEVEL || "info";
  const LOG_FILE = process.env.LOG_FILE || null;

  if (["warn", "debug", "info"].includes(LOG_LEVEL.toLowerCase())) {
    console.log(msg.yellow);
    writeToFile(`WARN: ${msg}`);
  }
}

/** Throws an error with the given @msg **/
export function logError(msg) {
  const LOG_FILE = process.env.LOG_FILE || null;
  writeToFile(`ERROR: ${msg}`);
  throw new Error(msg);
}

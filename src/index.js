import * as fs from "fs";
import "dotenv/config";
import "colors";
import { time } from "console";

function getTimestamp() {
  const TIMESTAMP = process.env.TIMESTAMP || null;
  if (!TIMESTAMP) return "";

  if (TIMESTAMP.toLowerCase() == "millis") return "[" + Date.now() + "] ";

  if (TIMESTAMP.toLowerCase() == "date") {
    let date_ob = new Date();
    let timestamp = "[";

    timestamp += date_ob.getFullYear() + "-";
    timestamp += ("0" + (date_ob.getMonth() + 1)).slice(-2) + "-";
    timestamp += ("0" + date_ob.getDate()).slice(-2) + " ";
    timestamp += date_ob.getHours() + ":";
    timestamp += date_ob.getMinutes() + ":";
    timestamp += date_ob.getSeconds() + ":";
    timestamp += date_ob.getMilliseconds() + "] ";

    return timestamp;
  }

  return "";
}

async function writeToFile(message) {
  const LOG_FILE = process.env.LOG_FILE || null;
  if (!LOG_FILE) return;

  let msg = `${getTimestamp()}${message}\n`;
  fs.writeFileSync(LOG_FILE, msg, { flag: "a+" });
}

function writeToConsole(message) {
  let msg = `${getTimestamp()}${message}\n`;
  console.log(msg);
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
    writeToConsole(msg);
    writeToFile(`DEBUG: ${msg}`);
  }
}

/** Prints the given `msg` if the `LOG_LEVEL` is "info" or higher. **/
export function logInfo(msg) {
  const LOG_LEVEL = process.env.LOG_LEVEL || "info";

  if (["debug", "info"].includes(LOG_LEVEL.toLowerCase())) {
    writeToConsole(msg.green);
    writeToFile(`INFO: ${msg}`);
  }
}

/** Prints the given `msg` if the `LOG_LEVEL` is "warn" or higher. **/
export function logWarn(msg) {
  const LOG_LEVEL = process.env.LOG_LEVEL || "info";

  if (["warn", "debug", "info"].includes(LOG_LEVEL.toLowerCase())) {
    writeToConsole(msg.yellow);
    writeToFile(`WARN: ${msg}`);
  }
}

/** Throws an error with the given @msg **/
export function logError(msg) {
  writeToFile(`ERROR: ${msg}`);
  throw new Error(msg);
}

import "dotenv/config";
import "colors";

export class Logger {
  static log_level;

  /**
   * Make sure the log level is set.
   * If it is not defined in the env vars, the default value is "info",
   * which will print everything but the `logVar()`.
   */
  static init() {
    Logger.log_level = process.env.LOG_LEVEL || "info";
  }

  static logVar(msg) {
    // --------------------------------------------------------------------------------------------
    // Make sure the logger is initialized.
    // --------------------------------------------------------------------------------------------
    if (!Logger.log_level) Logger.init();

    if (["debug"].includes(Logger.log_level.toLowerCase())) {
      console.log(msg);
    }
  }

  static logInfo(msg) {
    // --------------------------------------------------------------------------------------------
    // Make sure the logger is initialized.
    // --------------------------------------------------------------------------------------------
    if (!Logger.log_level) Logger.init();

    if (["debug", "info"].includes(Logger.log_level.toLowerCase())) {
      console.log(msg.green);
    }
  }

  /**
   * Prints the given @msg in red and throws an error.
   * This will be executed regardless of the LOG_LEVEL set in env vars.
   *
   * @param msg: the message to be printed to the console.
   */
  static logWarn(msg) {
    // --------------------------------------------------------------------------------------------
    // Make sure the logger is initialized.
    // --------------------------------------------------------------------------------------------
    if (!Logger.log_level) Logger.init();

    // --------------------------------------------------------------------------------------------
    // Check the log level. If it's ok, print the message to the console and make it yellow.
    // --------------------------------------------------------------------------------------------
    if (["warn", "debug", "info"].includes(Logger.log_level.toLowerCase())) {
      console.log(msg.yellow);
    }
  }

  /**
   * Prints the given @msg in red and throws an error.
   * This will be executed regardless of the LOG_LEVEL set in env vars.
   *
   * @param msg: the message to be printed to the console.
   */
  static logError(msg) {
    // --------------------------------------------------------------------------------------------
    // Make sure the logger is initialized.
    // --------------------------------------------------------------------------------------------
    if (!Logger.log_level) Logger.init();

    // --------------------------------------------------------------------------------------------
    // Print the message to the console and throw a new error.
    // --------------------------------------------------------------------------------------------
    console.log(msg.red);
    throw new Error(msg);
  }
}

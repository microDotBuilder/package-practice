import chalk from "chalk";
import JSON5 from "json5";

export class Logger {
  static logg(...message: unknown[]) {
    console.log(chalk.green(message));
  }
  static error(...message: unknown[]) {
    console.log(chalk.red(message));
  }
  static info(...message: unknown[]) {
    console.log(chalk.blue(message));
  }
  static warn(...message: unknown[]) {
    console.log(chalk.yellow(message));
  }
  static debug(...message: unknown[]) {
    console.log(chalk.magenta(message));
  }
  static success(...message: unknown[]) {
    console.log(chalk.green(message));
  }

  static loggReturn(...message: unknown[]) {
    return chalk.green(message);
  }
  static errorReturn(...message: unknown[]) {
    return chalk.red(message);
  }
  static infoReturn(...message: unknown[]) {
    return chalk.blue(message);
  }
  static warnReturn(...message: unknown[]) {
    return chalk.yellow(message);
  }
  static debugReturn(...message: unknown[]) {
    return chalk.magenta(message);
  }
  static successReturn(...message: unknown[]) {
    return chalk.green(message);
  }
  static loggJSON(message: object) {
    console.log(chalk.green(JSON5.stringify(message, null, 2)));
  }
  static errorJSON(message: object) {
    console.log(chalk.red(JSON5.stringify(message, null, 2)));
  }
  static infoJSON(message: object) {
    console.log(chalk.blue(JSON5.stringify(message, null, 2)));
  }
  static warnJSON(message: object) {
    console.log(chalk.yellow(JSON5.stringify(message, null, 2)));
  }
  static debugJSON(message: object) {
    console.log(chalk.magenta(JSON5.stringify(message, null, 2)));
  }
  static successJSON(message: object) {
    console.log(chalk.green(JSON5.stringify(message, null, 2)));
  }
}

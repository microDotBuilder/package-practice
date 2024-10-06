import { describe, it, expect, vi } from "vitest";
import { Logger } from "./index";
import chalk from "chalk";

describe("index", () => {
  it("should work", () => {
    expect(true).toBe(true);
  });
});

describe("Logger", () => {
  it("should work", () => {
    expect(true).toBe(true);
  });

  describe("console logging methods", () => {
    it("should log messages with correct colors", () => {
      const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});

      Logger.logg("test message");
      expect(consoleSpy).toHaveBeenCalledWith(chalk.green(["test message"]));

      Logger.error("error message");
      expect(consoleSpy).toHaveBeenCalledWith(chalk.red(["error message"]));

      Logger.info("info message");
      expect(consoleSpy).toHaveBeenCalledWith(chalk.blue(["info message"]));

      Logger.warn("warning message");
      expect(consoleSpy).toHaveBeenCalledWith(
        chalk.yellow(["warning message"])
      );

      Logger.debug("debug message");
      expect(consoleSpy).toHaveBeenCalledWith(chalk.magenta(["debug message"]));

      Logger.success("success message");
      expect(consoleSpy).toHaveBeenCalledWith(chalk.green(["success message"]));

      consoleSpy.mockRestore();
    });
  });

  describe("return methods", () => {
    it("should return colored strings", () => {
      expect(Logger.loggReturn("test message")).toBe(
        chalk.green(["test message"])
      );
      expect(Logger.errorReturn("error message")).toBe(
        chalk.red(["error message"])
      );
      expect(Logger.infoReturn("info message")).toBe(
        chalk.blue(["info message"])
      );
      expect(Logger.warnReturn("warning message")).toBe(
        chalk.yellow(["warning message"])
      );
      expect(Logger.debugReturn("debug message")).toBe(
        chalk.magenta(["debug message"])
      );
      expect(Logger.successReturn("success message")).toBe(
        chalk.green(["success message"])
      );
    });
  });

  describe("JSON logging methods", () => {
    it("should log JSON messages with correct colors", () => {
      const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
      const testObject = { key: "value" };

      Logger.loggJSON(testObject);
      expect(consoleSpy).toHaveBeenCalledWith(
        chalk.green(JSON.stringify(testObject, null, 2))
      );

      Logger.errorJSON(testObject);
      expect(consoleSpy).toHaveBeenCalledWith(
        chalk.red(JSON.stringify(testObject, null, 2))
      );

      Logger.infoJSON(testObject);
      expect(consoleSpy).toHaveBeenCalledWith(
        chalk.blue(JSON.stringify(testObject, null, 2))
      );

      Logger.warnJSON(testObject);
      expect(consoleSpy).toHaveBeenCalledWith(
        chalk.yellow(JSON.stringify(testObject, null, 2))
      );

      consoleSpy.mockRestore();
    });
  });
});

import { describe, expect, it } from "vitest";
import { getNameFromFile } from "../file";

describe("getNameFromFile", () => {
  it("should return the name from the file path", () => {
    const filePath = "file.png";
    expect(getNameFromFile(filePath)).toEqual("file");
  });

  it("should return the name without extension", () => {
    const filePath = "file.jpeg";
    expect(getNameFromFile(filePath)).toEqual("file");
  });

  it("should return the full name if there are no dots in the file path", () => {
    const filePath = "file";
    expect(getNameFromFile(filePath)).toEqual("file");
  });

  it("should return an empty string if the file path is empty", () => {
    const filePath = "";
    expect(getNameFromFile(filePath)).toEqual("");
  });
});

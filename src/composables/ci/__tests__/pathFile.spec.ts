import { describe, expect, it } from "vitest";
import { updateFilenameFromViteGlob } from "../pathFile";

describe("keyFromPath.ts", () => {
  it("return the correct key from a valid path", () => {
    const path = "path/to/your/file.txt";
    const expectedKey = "file";
    const actualKey = updateFilenameFromViteGlob(null, path);
    expect(actualKey).equal(expectedKey);
  });

  it("return the correct key from a path without an extension", () => {
    const path = "path/to/your/file";
    const expectedKey = "file";
    const actualKey = updateFilenameFromViteGlob(null, path);
    expect(actualKey).equal(expectedKey);
  });

  it("return an empty string from an empty path", () => {
    const path = "";
    const expectedKey = "";
    const actualKey = updateFilenameFromViteGlob(null, path);
    expect(actualKey).equal(expectedKey);
  });
});

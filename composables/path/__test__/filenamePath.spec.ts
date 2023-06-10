import { describe, expect, it } from "vitest";
import { getFilenameFromPath } from "../filenamePath";

describe("getFilenameFromPath", () => {
  it("should extract filename from path", () => {
    expect(getFilenameFromPath("/home/user/file.txt")).toEqual("file");
  });

  it("should return empty string if no file in path", () => {
    expect(getFilenameFromPath("/home/user/")).toEqual("");
  });

  it("should handle paths with no extension", () => {
    expect(getFilenameFromPath("/home/user/filename")).toEqual("filename");
  });
});

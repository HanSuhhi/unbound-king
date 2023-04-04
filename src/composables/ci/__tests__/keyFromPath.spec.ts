import { describe, expect, it, } from "vitest";
import { getKeyFromPath } from "../keyFromPath";

describe("keyFromPath.ts", () => {
  it('return the correct key from a valid path', assert => {
    const path = 'path/to/your/file.txt';
    const expectedKey = 'file';
    const actualKey = getKeyFromPath(null, path);
    expect(actualKey).equal(expectedKey);
  });

  it('return the correct key from a path without an extension', assert => {
    const path = 'path/to/your/file';
    const expectedKey = 'file';
    const actualKey = getKeyFromPath(null, path);
    expect(actualKey).equal(expectedKey);
  });

  it('return an empty string from an empty path', assert => {
    const path = '';
    const expectedKey = '';
    const actualKey = getKeyFromPath(null, path);
    expect(actualKey).equal(expectedKey);
  });
});
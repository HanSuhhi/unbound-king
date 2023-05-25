import { describe, expect, it } from "vitest";
import { parseObjectToEmptyArrays } from "../object";

describe("parseObjectToEmptyArrays", () => {
  it("should return an object with keys mapped to empty arrays", () => {
    const result = parseObjectToEmptyArrays({
      a: 1,
      b: 2,
      c: 3
    });
    expect(result).toEqual({
      a: [],
      b: [],
      c: []
    });
  });

  it("should handle nested objects", () => {
    const result = parseObjectToEmptyArrays({
      a: 1,
      b: {
        c: 2
      }
    });
    expect(result).toEqual({
      a: [],
      b: []
    });
  });

  it("should handle empty object", () => {
    const result = parseObjectToEmptyArrays({});
    expect(result).toEqual({});
  });
});

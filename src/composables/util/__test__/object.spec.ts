import { describe, expect, it } from "vitest";
import { countKeys, parseObjectToEmptyArrays } from "../object";

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

describe("countKeys", () => {
  it("should return the count of keys in the object", () => {
    const obj = {
      key1: "value1",
      key2: "value2",
      key3: {
        nestedKey1: "nestedValue1",
        nestedKey2: "nestedValue2"
      }
    };

    expect(countKeys(obj)).toEqual(4);
  });

  it("should return 0 if the object is empty", () => {
    const obj = {};

    expect(countKeys(obj)).toEqual(0);
  });

  it("should count keys in nested objects", () => {
    const obj = {
      key1: "value1",
      key2: {
        nestedKey1: "nestedValue1",
        nestedKey2: "nestedValue2",
        nestedKey3: {
          deeplyNestedKey: "deeplyNestedValue"
        }
      }
    };

    expect(countKeys(obj)).toEqual(4);
  });

  it("should skip non-object values", () => {
    const obj = {
      key1: "value1",
      key2: 123,
      key3: true
    };

    expect(countKeys(obj)).toEqual(3);
  });
});

import { describe, expect, it } from "vitest";
import { arrToTypeString } from "../array";

describe("arrToTypeString", () => {
  it("should convert array elements to a string separated by \"|\"", () => {
    const arr = ["apple", "banana", "orange"];
    expect(arrToTypeString(arr)).toEqual("\"apple\"|\"banana\"|\"orange\"");
  });

  it("should handle empty array", () => {
    const arr: string[] = [];
    expect(arrToTypeString(arr)).toEqual("");
  });

  it("should handle array with single element", () => {
    const arr = ["apple"];
    expect(arrToTypeString(arr)).toEqual("\"apple\"");
  });

  it("should escape double quotes", () => {
    const arr = ["\"apple\"", "banana"];
    expect(arrToTypeString(arr)).toEqual("\"\\\"apple\\\"\"|\"banana\"");
  });

  it("should handle array with empty strings", () => {
    const arr = ["apple", "", "orange"];
    expect(arrToTypeString(arr)).toEqual("\"apple\"||\"orange\"");
  });
});

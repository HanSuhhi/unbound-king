import { describe, expect, test } from "vitest";
import { capitalize } from "../string";

describe("capitalize()", () => {
  test("Uppercases the first character", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("Does not affect rest of string", () => {
    expect(capitalize("helloWorld")).toBe("HelloWorld");
  });

  test("Works for empty string", () => {
    expect(capitalize("")).toBe("");
  });
});

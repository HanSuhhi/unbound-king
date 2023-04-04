import { expect, describe, it } from 'vitest';
import { compareIgnoreCase } from "../string";

describe("string.ts", () => {
  it("should compare two strings ignoring case", () => {
    expect(compareIgnoreCase("hello", "HELLO")).toBe(true);
    expect(compareIgnoreCase("Hello", "world")).toBe(false);
    expect(compareIgnoreCase("apple", "aPpLe")).toBe(true);
    expect(compareIgnoreCase("123", "123")).toBe(true);
    expect(compareIgnoreCase("hello", "hello world")).toBe(false);
  });
});

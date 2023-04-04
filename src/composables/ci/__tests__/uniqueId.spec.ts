import { describe, expect, it } from "vitest";
import { defineUniqueId } from "../uniqueId";

describe("defineUniqueId", () => {
  it("should generate a unique id with a prefix", () => {
    const prefix = "test";
    const result = defineUniqueId(prefix);
    expect(result.slice(0, 4)).toBe(prefix.toUpperCase());
  });

  it("should generate a unique id without a prefix", () => {
    const result = defineUniqueId();
    expect(result).toBeTruthy();
  });

  it("should generate unique ids for multiple calls", () => {
    const prefix = "test";
    const result1 = defineUniqueId(prefix);
    const result2 = defineUniqueId(prefix);
    expect(result1).not.toBe(result2);
  });
});

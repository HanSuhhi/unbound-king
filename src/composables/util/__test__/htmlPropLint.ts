import { describe, expect, it } from "vitest";
import { useHtmlPropLint } from "../htmlPropLint";

describe("htmlPropLint.ts", () => {
  it("should returns null if trigger is false", () => {
    const result = useHtmlPropLint(false);
    expect(result).toBeNull();
  });

  it("should returns an empty string if trigger is true", () => {
    const result = useHtmlPropLint(true);
    expect(result).toBe("");
  });

});


import { describe, expect, it } from "vitest";
import { transformToKebab } from "../kebab";

describe("transformToKebab", () => {
  it("should transform a camelCase string to kebab-case", () => {
    const text = "thisIsACamelCaseString";
    const transformedText = transformToKebab(text);
    expect(transformedText).toEqual("this-is-a-camel-case-string");
  });

  it("should return an empty string if an empty string is passed in", () => {
    const text = "";
    const transformedText = transformToKebab(text);
    expect(transformedText).toEqual("");
  });

  it("should not transform a kebab-case string", () => {
    const text = "this-is-a-kebab-case-string";
    const transformedText = transformToKebab(text);
    expect(transformedText).toEqual("this-is-a-kebab-case-string");
  });
});

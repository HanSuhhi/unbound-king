import { describe, expect, it } from "vitest";
import { haveAttribute, lintAttribute, checkAttribute } from "../elementAttribute.tool";

describe("elementAttribute.tool.ts", () => {
  it("return [false, null]", () => {
    const attributeName = "data-test";
    const ele = document.createElement("p");
    const [have, result] = haveAttribute(ele, attributeName);
    expect(have).toBeFalsy();
    expect(result).toBeFalsy();
  });
  it("return [true, false]", () => {
    const attributeName = "data-test";
    const ele = document.createElement("p");
    ele.setAttribute(attributeName, "");
    const [have, result] = haveAttribute(ele, attributeName);
    expect(have).toBeTruthy();
    expect(result).toBeFalsy();
  });
  it("return [true, test-word]", () => {
    const attributeName = "data-test";
    const attributeValue = "value";
    const ele = document.createElement("p");
    ele.setAttribute(attributeName, attributeValue);
    const [have, result] = haveAttribute(ele, attributeName);
    expect(have).toBeTruthy();
    expect(result).toBe(attributeValue);
  });

  it("test function 'checkAttribute'", () => {
    expect(checkAttribute("test")).toStrictEqual([true, "test"]);
    expect(checkAttribute("")).toStrictEqual([true, null]);
    expect(checkAttribute(null)).toStrictEqual([false, null]);
    expect(checkAttribute(undefined)).toStrictEqual([false, null]);
  });

  it("test function 'lintAttribute'", () => {
    expect(lintAttribute(true)).toBe("");
    expect(lintAttribute(false)).toBeNull();
  });
});

import { describe, it, expect } from "vitest";
import { StyleSetter, VAR } from "../styleSetter.tool";

describe("styleSetter", () => {
  it("create", () => {
    const ele = document.createElement("p");
    ele.classList.add("test-ele");
    const styleSetter = new StyleSetter(ele, "test-ele");
    expect(styleSetter).toBeTruthy();
  });

  it("set rem number", () => {
    const ele = document.createElement("p");
    ele.classList.add("test-ele");
    const styleSetter = new StyleSetter(ele, "test-ele");
    expect(styleSetter.setRemNumber(undefined as any, "--test-prop")).toBeUndefined();
    styleSetter.setRemNumber(2, "--test-prop");
    expect(ele.style.getPropertyValue("--test-prop")).toBe("2rem");
  });

  it("set string", () => {
    const ele = document.createElement("p");
    ele.classList.add("test-ele");
    const styleSetter = new StyleSetter(ele, "test-ele");
    expect(styleSetter.setString(undefined as any, "--test-prop")).toBeUndefined();
    styleSetter.setString("test", "--test-prop");
    expect(ele.style.getPropertyValue("--test-prop")).toBe("test");
  });

  it("set style size", () => {
    const ele = document.createElement("p");
    ele.classList.add("test-ele");
    const styleSetter = new StyleSetter(ele, "test-ele");
    expect(styleSetter.setStyleSize("test-prop", undefined)).toBeUndefined();
    styleSetter.setStyleSize("test-prop", "normal");
    expect(ele.className).toContain("test-ele-test-prop-normal");
  });

  it("test function 'VAR'", () => {
    expect(VAR("test")).toBe("--test");
    expect(VAR("--test")).toBe("--test");
  });
});

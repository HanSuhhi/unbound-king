import { describe, expect, it } from "vitest";
import { TernaryResult, ternaryIsTrue } from "../ternary";

describe("ternaryIsTrue", () => {
  it("should execute callback when result is True", () => {
    let called = false;
    ternaryIsTrue(TernaryResult.True)(() => {
      called = true;
    });
    expect(called).toEqual(true);
  });

  it("should not execute callback when result is False", () => {
    let called = false;
    ternaryIsTrue(TernaryResult.False)(() => {
      called = true;
    });
    expect(called).toEqual(false);
  });

  it("should not execute callback when result is Indeterminate", () => {
    let called = false;
    ternaryIsTrue(TernaryResult.Indeterminate)(() => {
      called = true;
    });
    expect(called).toEqual(false);
  });
});

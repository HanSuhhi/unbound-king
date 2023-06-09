import { describe, expect, it } from "vitest";
import { verifyEmail } from "../vertivication";

describe("verifyEmail", () => {
  it("should return true for valid email", () => {
    expect(verifyEmail("hello@example.com")).toBe(true);
    expect(verifyEmail("hello+world@example.co.uk")).toBe(true);
  });

  it("should return false for invalid email", () => {
    expect(verifyEmail("hello@example")).toBe(false);
    expect(verifyEmail("hello@example@example.com")).toBe(false);
    expect(verifyEmail("helloexample.com")).toBe(false);
  });

  it("should not allow empty email", () => {
    expect(verifyEmail("")).toBe(false);
  });
});

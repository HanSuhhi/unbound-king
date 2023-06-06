import { describe, expect, it } from "vitest";
import { useSecond } from "../ms";

describe("Time utilities", () => {
  it("useSecond should convert seconds to ms", () => {
    expect(useSecond(5)).toEqual(5000);
  });

  it("useMinute should convert minutes to ms", () => {
    expect(useSecond(1)).toEqual(60000);
  });
});

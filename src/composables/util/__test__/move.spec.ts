import { describe, expect } from "vitest";
import { move } from "../move";

describe("move", (it) => {
  it("should move an item in an array from one index to another", () => {
    const arr = [1, 2, 3, 4];
    const result = move(arr, 1, 2);
    expect(result).toEqual([1, 3, 2, 4]);
  });

  it("should return the original array if fromIndex and toIndex are the same", () => {
    const arr = [1, 2, 3, 4];
    const result = move(arr, 1, 1);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it("should handle moving the first item in the array", () => {
    const arr = [1, 2, 3, 4];
    const result = move(arr, 0, 2);
    expect(result).toEqual([2, 3, 1, 4]);
  });

  it("should handle moving the last item in the array", () => {
    const arr = [1, 2, 3, 4];
    const result = move(arr, 3, 1);
    expect(result).toEqual([1, 4, 2, 3]);
  });
});

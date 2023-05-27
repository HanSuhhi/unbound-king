import { merge } from "lodash";

export const deep = { deep: true };
export const immediate = { immediate: true };
export const deepImmediate = merge(deep, immediate);

/**
 * Creates a function that executes fn function when the passed boolean value is true
 * @function whenItsTrue
 * @param {() => void} fn fn The function to execute when the condition is true
 * @returns {(value: boolean) => void} Returns a function that accepts a boolean value as an argument
 */
export function whenItsTrue(fn: () => void) {
  return (value: boolean) => {
    if (value)
      fn();
  };
}

/**
 * Creates a function that executes fn function when the passed boolean value is false
 * @function whenItsFalse
 * @param {() => void} fn fn The function to execute when the condition is false
 * @returns {(value: boolean) => void} Returns a function that accepts a boolean value as an argument
 */
export function whenItsFalse(fn: () => void) {
  return (value: boolean) => {
    if (!value)
      fn();
  };
}

/**
 * Ternary result enum
 */
export enum TernaryResult {
  True,
  False,
  Indeterminate
}

/**
 * Takes a callback function and executes it if the result is True
 *
 * @function ternaryIsTrue
 * @param {TernaryResult} result Ternary result
 * @returns {() => void} The callback function
*/
export function ternaryIsTrue(result: TernaryResult) {
  return (fn: () => void) => {
    if (result === TernaryResult.True) fn();
  };
}

/**
 * Takes a callback function and executes it if the result is False
 *
 * @function ternaryIsFalse
 * @param {TernaryResult} result Ternary result
 * @returns {() => void} The callback function
*/
export function ternaryIsFalse(result: TernaryResult) {
  return (fn: () => void) => {
    if (result === TernaryResult.False) fn();
  };
}

/**
 * Takes a callback function and executes it if the result is Indeterminate
 *
 * @function ternaryIsIndeterminate
 * @param {TernaryResult} result Ternary result
 * @returns {() => void} The callback function
*/
export function ternaryIsIndeterminate(result: TernaryResult) {
  return (fn: () => void) => {
    if (result === TernaryResult.Indeterminate) fn();
  };
}

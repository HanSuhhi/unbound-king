import { every, forEach, isEmpty, isObject } from "lodash";
import { stringArrayEqual } from "./array";
import { TernaryResult } from "./ternary";

/**
 * Checks if the object is in a complete state
 *
 * @function isObjectComplete
 * @param {Dictionary<string[]>} obj Object containing string arrays
 * @returns {TernaryResult} Returns True if all arrays are non-empty and equal to the full object,
 * False if all are empty, otherwise Indeterminate
 */
export function isObjectComplete(obj: Dictionary<string[]>) {
  return (fullObj: Dictionary<string[]>): TernaryResult => {
    const isAllEmpty = every(obj, objArr => isEmpty(objArr));
    if (isAllEmpty) return TernaryResult.False;

    const isAllTrue = every(obj, (objArr, key) => stringArrayEqual(objArr, fullObj[key]));
    if (isAllTrue) return TernaryResult.True;

    return TernaryResult.Indeterminate;
  };
}

/**
 * Parses the object and returns an object with keys mapped to empty arrays
 *
 * @param {Object} obj The object to parse
 * @returns {Object} An object with the same keys mapped to empty arrays
*/
export function parseObjectToEmptyArrays<T = any>(obj: Dictionary<T>) {
  const result: Dictionary<[]> = {};
  for (const key in obj)
    result[key] = [];

  return result;
}

/**
 * Counts the number of keys in an object
 * @param {Record<string, unknown>} obj - The object to count the keys of
 * @returns {number} The total number of keys in the object
 */
export function countKeys(obj: Dictionary<any>): number {
  let count = 0;

  forEach(obj, (value, key) => {
    if (isObject(value)) count += countKeys(obj[key]);
    else count++;
  });

  return count;
}

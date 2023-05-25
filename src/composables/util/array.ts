/**
 * Checks if two string arrays are equal
 *
 * @function stringArrayEqual
 * @param {string[]} a First string array
 * @param {string[]} b Second string array
 * @returns {boolean} Returns true if the two arrays are equal, otherwise returns false
 */
export function stringArrayEqual(a: string[], b: string[]): boolean {
  if (a.length !== b.length) return false;
  return a.every(aItem => b.includes(aItem));
}

/**
 * Compares two strings ignoring case
 *
 * @function compareIgnoreCase
 * @param {string} a First string
 * @param {string} b Second string
 * @returns {boolean} Returns true if the two strings are equal ignoring case, otherwise false
*/
export function compareIgnoreCase(a: string, b: string): boolean {
  return a.toLowerCase() === b.toLowerCase();
}

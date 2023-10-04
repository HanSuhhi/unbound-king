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

export function parseMustacheString(str: string): Array<[text: string, inMustache: boolean]> {
  const pattern = /({{[^}]+}})|([^{{]+)(?={{|$)/g;
  const matches = str.matchAll(pattern);
  const result: [string, boolean][] = [];
  for (const match of matches) {
    const isBracketed = !!match[1];
    const value = isBracketed ? match[1].slice(2, -2) : match[0];
    result.push([value, isBracketed]);
  }
  return result;
}

export function parseMustacheString2(str: string): Array<[text: string, inMustache: boolean]> {
  const pattern = /(<<[^>]+>>)|([^<<]+)(?=<<|$)/g;
  const matches = str.matchAll(pattern);
  const result: [string, boolean][] = [];
  for (const match of matches) {
    const isBracketed = !!match[1];
    const value = isBracketed ? match[1].slice(2, -2) : match[0];
    result.push([value, isBracketed]);
  }
  return result;
}

/**
 * Capitalizes the first character of a string.
 *
 * @param {string} string The string to capitalize
 * @returns {string} The capitalized string
 */
export function capitalize(string: string): string {
  if (!string) return string;
  return string[0].toUpperCase() + string.slice(1);
}

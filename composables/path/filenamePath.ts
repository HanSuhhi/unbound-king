/**
 * Extracts the filename from a path string.
 *
 * @param {string} path The path string
 * @returns {string} The extracted filename
 */
export function getFilenameFromPath(path: string): string {
  return path.split("/").pop()!.split(".").shift() || "";
}

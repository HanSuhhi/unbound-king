export function arrToTypeString(arr: readonly string[]) {
  return arr
    .map(item => `"${item}"`)
    .join("|");
}

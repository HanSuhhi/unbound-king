export function move<T>(arr: T[], fromIndex: number, toIndex: number) {
  const item = arr.splice(fromIndex, 1)[0];
  arr.splice(toIndex, 0, item);
  return arr;
}

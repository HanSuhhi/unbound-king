export function getNameFromFile(filePath: string): string {
  const matchResult = filePath.match(/^(.+)\.\w+$/);
  return matchResult ? matchResult[1] : filePath;
}

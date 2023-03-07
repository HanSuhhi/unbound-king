export const getKeyFromPath = (_: any, path: string): string => {
  const key = path.split("/").pop()!.split(".").shift() || "";
  return key;
};

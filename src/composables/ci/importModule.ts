import { mapKeys } from "lodash-es";
import { getKeyFromPath } from "./keyFromPath";

export const parseImportModule = (data: Record<string, any>) => {
  return mapKeys(data, getKeyFromPath);
};

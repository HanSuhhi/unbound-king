import { mapKeys } from "lodash-es";
import { getKeyFromPath } from "./keyFromPath";

export const parseImportModule = (data: Record<string, any>, returnDefault = false) => {
  const returnData = mapKeys(data, getKeyFromPath);
  if (returnDefault) {
    for (const _data in returnData) returnData[_data] = returnData[_data].default;
  }
  return returnData;
};

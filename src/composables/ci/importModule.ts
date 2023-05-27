import { mapKeys } from "lodash";
import { getKeyFromPath } from "./keyFromPath";

export function parseImportModule(data: Record<string, any>, returnDefault = false) {
  const returnData = mapKeys<any>(data, getKeyFromPath);
  if (returnDefault)
    for (const _data in returnData) returnData[_data] = returnData[_data].default;

  return returnData;
}

import { mapKeys } from "lodash";
import { updateFilenameFromViteGlob } from "./pathFile";

export function parseImportModule(data: Record<string, any>, returnDefault = false) {
  const returnData = mapKeys<any>(data, updateFilenameFromViteGlob);
  if (returnDefault) for (const _data in returnData) returnData[_data] = returnData[_data].default;

  return returnData;
}

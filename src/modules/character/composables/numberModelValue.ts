import { fromPairs, map } from "lodash";
import { useNumberModelValue } from "../modelValue/number";

export function convertObjToNumberBoxValue(data: ReturnStruct[]) {
  return fromPairs(map(data, ([_, num, str]) => [str, useNumberModelValue(Number(num))]));
}

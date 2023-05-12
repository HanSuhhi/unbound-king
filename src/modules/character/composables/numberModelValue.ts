import { fromPairs, map } from "lodash-es";
import { useNumberModelValue } from "../modelValue/number";

export function convertObjToNumberBoxValue(data: ReturnStruct[]) {
  return fromPairs(map(data, ([_, num, str]) => [str, useNumberModelValue(Number(num))]));
}

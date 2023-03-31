import { fromPairs, map } from "lodash-es";
import { useNumberModelValue } from "../modelValue/number";

export const convertObjToNumberBoxValue = (data: ReturnStruct[]) => fromPairs(map(data, ([_, num, str]) => [str, useNumberModelValue(Number(num))]));

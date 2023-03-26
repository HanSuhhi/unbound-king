import { merge } from "lodash-es";

export const deep = { deep: true };
export const immediate = { immediate: true };
export const deepImmediate = merge(deep, immediate);

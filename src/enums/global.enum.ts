import { invert } from "lodash-es";

export const GlobalEnum: Record<string, string> = {
  standard: "基础包",
  ATV: "AttributeValue",
};
export const invertGlobalEnum: Record<string, string> = invert(GlobalEnum);

export const getGlobalEnumNameOrNot = (key: string): string => {
  return GlobalEnum[key] || key;
};

export const getInvertGlobalEnumNameOrNot = (key: string): string => {
  return invertGlobalEnum[key] || key;
};

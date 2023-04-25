import { invert } from "lodash-es";

const GlobalEnum: Record<string, string> = {
  ATV: "AttributeValue"
};
export const invertGlobalEnum: Record<string, string> = invert(GlobalEnum);

export function getGlobalEnumNameOrNot(key: string): string {
  return GlobalEnum[key] || key;
}

export function getInvertGlobalEnumNameOrNot(key: string): string {
  return invertGlobalEnum[key] || key;
}

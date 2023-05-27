import { invert } from "lodash";

const GlobalEnum: Record<string, string> = {
  ATV: "AttributeValue"
};
export const invertGlobalEnum: Record<string, string> = invert(GlobalEnum);

export function getGlobalEnumNameOrNot(key: string): string {
  return GlobalEnum[key] || key;
}

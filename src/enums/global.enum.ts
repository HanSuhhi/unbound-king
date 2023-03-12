import { invert } from "lodash-es";

export const GlobalEnum: Record<string, string> = {
  standard: "基础包",
};
export const invertGlobalEnum: Record<string, string> = invert(GlobalEnum);

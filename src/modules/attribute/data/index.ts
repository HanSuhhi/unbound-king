import { map, merge } from "lodash-es";

export const DATA_Attributes: Record<string, Attribute> = {};

map(import.meta.glob("./*.data.ts", { eager: true }), (module: any) => {
  merge(DATA_Attributes, module.default);
});

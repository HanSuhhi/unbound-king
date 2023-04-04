import { map, merge } from "lodash-es";

export const DATA_AttributeValues: Dictionary<AttributeValue> = {};

map(import.meta.glob("./*.data.ts", { eager: true }), (module: any) => {
  merge(DATA_AttributeValues, module.default);
});

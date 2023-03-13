import { map, merge } from "lodash-es";

export const DATA_AttrbuteValues: IdValue<AttributeValue> = {};

map(import.meta.glob("./*.data.ts", { eager: true }), (module: any) => {
  merge(DATA_AttrbuteValues, module.default);
});

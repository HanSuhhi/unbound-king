import { forEach, map } from "lodash-es";
import type { SubAttributeName } from "./standard.data";

export type AttributeName = SubAttributeName;
export const DATA_Attributes = new Map<AttributeName, Attribute>();

map(import.meta.glob("./*.data.ts", { eager: true }), (module: any) => {
  forEach<Attribute>(module.default, (attribute) => {
    DATA_Attributes.set(attribute.translator[0], attribute);
  });
});

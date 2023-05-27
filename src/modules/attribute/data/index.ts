import { forEach, map } from "lodash";
import type { SubAttributeName } from "./standard.data";

export type AttributeName = SubAttributeName;
export const DATA_Attributes = new Map<AttributeName, Attribute>();

map(import.meta.glob("./*.data.ts", { eager: true }), (module: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  forEach<Attribute>(module.default, (attribute) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    DATA_Attributes.set(attribute.translator[0] as any, attribute);
  });
});

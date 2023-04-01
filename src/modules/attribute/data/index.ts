import { map, merge } from "lodash-es";
import type { StandardAttributeName } from './standard.data';

export type AttributeName = StandardAttributeName
export const DATA_Attributes = {} as Record<AttributeName, Attribute>;

map(import.meta.glob("./*.data.ts", { eager: true }), (module: any) => {
  merge(DATA_Attributes, module.default);
});

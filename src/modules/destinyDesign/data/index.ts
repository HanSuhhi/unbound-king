import { forEach, map } from "lodash-es";

export const DATA_Destiny = new Map<string, Destiny>();

map(import.meta.glob("./*.data.ts", { eager: true }), (module) => {
  forEach<Destiny>(module.default, (destiny) => {
    DATA_Destiny.set(destiny.translator[0], destiny);
  });
});

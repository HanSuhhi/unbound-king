import { forEach, map } from "lodash";

export const DATA_Destiny = new Map<string, Destiny>();

map(import.meta.glob("./*.data.ts", { eager: true }), (module: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  forEach<Destiny>(module.default, (destiny) => {
    DATA_Destiny.set(destiny.translator[0], destiny);
  });
});

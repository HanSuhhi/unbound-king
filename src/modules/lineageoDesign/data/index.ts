import { forEach, map } from "lodash-es";

export const DATA_Lineageo = new Map<string, Lineageo>();

map(import.meta.glob("./*.data.ts", { eager: true }), (module: any) => {
  forEach<Lineageo>(module.default, (lineageo) => {
    DATA_Lineageo.set(lineageo.id, lineageo);
  });
});

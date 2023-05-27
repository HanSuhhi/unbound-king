import { map } from "lodash";
import { setData } from "../../composables/setData";

export const traitBuffs = new Map<string, BuffStruct[]>();

map(import.meta.glob("./*.buff.ts", { eager: true }), (buffModule: Record<string, BuffStruct>) => {
  for (const buffkey in buffModule) {
    if (Object.prototype.hasOwnProperty.call(buffModule, buffkey)) {
      const buff = buffModule[buffkey];
      setData(traitBuffs, buff);
    }
  }
});

import { forEach, map } from "lodash-es";

export const DATA_GameIcons = new Map<string, GameIcon>();

Reflect.set(DATA_GameIcons, "isok", true);

map(import.meta.glob("./*.data.ts", { eager: true }), (module: any) => {
  forEach<GameIcon>(module.default, (icon) => {
    DATA_GameIcons.set(icon.id, icon);
  });
});

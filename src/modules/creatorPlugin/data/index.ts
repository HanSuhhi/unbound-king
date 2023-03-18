import { map } from "lodash-es";

export const DATA_Creator_Plugins: CreatorPlugin[] = [];

map(import.meta.glob("./*.plugin.ts", { eager: true }), (creatorPlugin: any) => {
  DATA_Creator_Plugins.push(creatorPlugin.default);
});

import { map } from "lodash-es";

export const DATA_Creators: Creator[] = [];

map(import.meta.glob("./*.creator.ts", { eager: true }), (creatorModule: any) => {
  DATA_Creators.push(creatorModule.default);
});

import { forEach, map } from 'lodash-es';

export const DATA_Personalities = new Map<string, Personality>();

map(import.meta.glob("./*.data.ts", { eager: true }), (module: any) => {
  forEach<Personality>(module.default, personality => {
    DATA_Personalities.set(personality.id, personality);
  });
});

import type { IndexableType, Table } from "dexie";
import type { Resourse } from "../resourse.table";

export function useRaceResourse(model: Table<Resourse, IndexableType>) {
  const getAllRaces = async () => {
    if (import.meta.env.SSR) return [];
    return await model.where("type").equals("race").toArray();
  };

  const getRegistCharacterRaces = async () => {
    if (import.meta.env.SSR) return [];
    return await model.get({
      type: "race",
      registCharacter: true
    }).toArray();
  };

  return { getAllRaces };
}

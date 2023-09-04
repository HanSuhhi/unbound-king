import type { IndexableType, Table } from "dexie";
import type { Resourse } from "../resourse.table";

export function usePersonalityResourse(model: Table<Resourse, IndexableType>) {
  const getAllPersonalities = async () => {
    if (import.meta.env.SSR) return [];
    return await model.where("type").equals("personality").toArray();
  };

  return { getAllPersonalities };
}

import type { IndexableType, Table } from "dexie";
import type { Resourse } from "../resourse.table";

export function useTraitResourse(model: Table<Resourse, IndexableType>) {
  const getAllTraits = async () => {
    if (import.meta.env.SSR) return [];
    return await model.where("type").equals("trait").toArray();
  };

  return { getAllTraits };
}

import type { IndexableType, Table } from "dexie";
import type { Resourse } from "../resourse.table";

export function useProfessionResourse(model: Table<Resourse, IndexableType>) {
  const getAllProfessions = async () => {
    if (import.meta.env.SSR) return [];
    return await model.where("type").equals("profession").toArray();
  };

  return { getAllProfessions };
}

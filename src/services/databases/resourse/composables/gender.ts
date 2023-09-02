import type { IndexableType, Table } from "dexie";
import type { Resourse } from "../resourse.table";

export function useGenderResourse(model: Table<Resourse, IndexableType>) {
  const getAllGenders = async () => {
    if (import.meta.env.SSR) return [];
    return await model.where("type").equals("gender").toArray();
  };

  return { getAllGenders };
}

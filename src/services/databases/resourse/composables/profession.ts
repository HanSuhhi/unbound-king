import type { IndexableType, Table } from "dexie";
import type { Resourse } from "../resourse.table";
import { filterRegistCharacterResourseByType } from "@/composables/store/resourseTag";
import { ResourseType } from "#/server/modules/editions/enums/resourse-type.enum";

export function useProfessionResourse(model: Table<Resourse, IndexableType>) {
  const getAllProfessions = async () => {
    if (import.meta.env.SSR) return [];
    return await model.where("type").equals(ResourseType.Profession).toArray();
  };

  const getRegistCharacterProfessions = async () => {
    if (import.meta.env.SSR) return [];
    return filterRegistCharacterResourseByType(model, ResourseType.Profession);
  };

  return {
    getAllProfessions,
    getRegistCharacterProfessions
  };
}

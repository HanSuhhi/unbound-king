import type { IndexableType, Table } from "dexie";
import type { Resourse } from "../resourse.table";
import { filterRegistCharacterResourseByType } from "@/composables/store/resourseTag";
import { ResourseType } from "#/server/modules/editions/enums/resourse-type.enum";

export function useGenderResourse(model: Table<Resourse, IndexableType>) {
  const getAllGenders = async () => {
    if (import.meta.env.SSR) return [];
    return await model.where("type").equals(ResourseType.Gender).toArray();
  };

  const getRegistCharacterGenders = async () => {
    if (import.meta.env.SSR) return [];
    return filterRegistCharacterResourseByType(model, ResourseType.Gender);
  };

  return { getAllGenders, getRegistCharacterGenders };
}

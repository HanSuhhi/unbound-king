import type { IndexableType, Table } from "dexie";
import type { Resourse } from "../resourse.table";
import { filterRegistCharacterResourseByType } from "@/composables/store/resourseTag";
import { ResourseType } from "#/server/modules/editions/enums/resourse-type.enum";

export function usePersonalityResourse(model: Table<Resourse, IndexableType>) {
  const getAllPersonalities = async () => {
    if (import.meta.env.SSR) return [];
    return await model.where("type").equals(ResourseType.Personality).toArray();
  };

  const getRegistCharacterPersonalities = async () => {
    if (import.meta.env.SSR) return [];
    return filterRegistCharacterResourseByType(model, ResourseType.Personality);
  };

  return { getAllPersonalities, getRegistCharacterPersonalities };
}

import type { IndexableType, Table } from "dexie";
import type { Resourse } from "../resourse.table";
import { ResourseType } from "#/server/modules/editions/enums/resourse-type.enum";
import { filterRegistCharacterResourseByType } from "@/composables/store/resourseTag";

export function useRaceResourse(model: Table<Resourse, IndexableType>) {
  const getAllRaces = async () => {
    if (import.meta.env.SSR) return [];
    return await model.where("type").equals(ResourseType.Race).toArray();
  };

  const getRegistCharacterRaces = async () => {
    if (import.meta.env.SSR) return [];
    return filterRegistCharacterResourseByType(model, ResourseType.Race);
  };

  return { getAllRaces, getRegistCharacterRaces };
}

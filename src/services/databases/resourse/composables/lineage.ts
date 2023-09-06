import type { IndexableType, Table } from "dexie";
import type { Resourse } from "../resourse.table";
import { filterRegistCharacterResourseByType } from "@/composables/store/resourseTag";
import { ResourseType } from "#/server/modules/editions/enums/resourse-type.enum";

export function useLineageResourse(model: Table<Resourse, IndexableType>) {
  const getAllLineages = async () => {
    if (import.meta.env.SSR) return [];
    return await model.where("type").equals(ResourseType.Lineage).toArray();
  };

  const getRegistCharacterLineages = async () => {
    if (import.meta.env.SSR) return [];
    return filterRegistCharacterResourseByType(model, ResourseType.Lineage);
  };

  return { getAllLineages, getRegistCharacterLineages };
}

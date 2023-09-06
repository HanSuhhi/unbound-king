import type { IndexableType, Table } from "dexie";
import type { Resourse } from "../resourse.table";
import { filterRegistCharacterResourseByType } from "@/composables/store/resourseTag";
import { ResourseType } from "#/server/modules/editions/enums/resourse-type.enum";

export function useTraitResourse(model: Table<Resourse, IndexableType>) {
  const getAllTraits = async () => {
    if (import.meta.env.SSR) return [];
    return await model.where("type").equals(ResourseType.Trait).toArray();
  };

  const getRegistCharacterTraits = async () => {
    if (import.meta.env.SSR) return [];
    return filterRegistCharacterResourseByType(model, ResourseType.Trait);
  };

  return { getAllTraits, getRegistCharacterTraits };
}

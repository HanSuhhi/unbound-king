import type { IndexableType, Table } from "dexie";
import { ResourseTag } from "#/server/modules/editions/enums/resourse-tag.enum";
import type { Resourse } from "@/services/databases/resourse/resourse.table";
import type { ResourseType } from "#/server/modules/editions/enums/resourse-type.enum";

export function filterIndexReigstCharacterResourseTag(resourses: Resourse[]) {
  return resourses.filter(resourse => resourse.tags?.includes(ResourseTag.RegistCharacter));
}

export async function filterRegistCharacterResourseByType(model: Table<Resourse, IndexableType>, resourseType: ResourseType) {
  const races = await model.where("type").equals(resourseType).toArray();
  return filterIndexReigstCharacterResourseTag(races);
}

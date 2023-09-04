import { ResourseTag } from "../enums/resourse-tag.enum";
import type { ResourseResponse } from "../vos/resourse.vo";

export function addRegistCharacterResourseTag<T>(targetResourse: T[], resourse: T, originTags: ResourseTag[]) {
  if (targetResourse.includes(resourse)) originTags.push(ResourseTag.RegistCharacter);
}

export function filterRegistCharacterResourseTag(resourses: ResourseResponse[]) {
  return resourses.filter(resourse => resourse[3].includes(ResourseTag.RegistCharacter));
}

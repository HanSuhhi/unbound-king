import { filter } from "lodash-es";

export const transformGeneraterEnumToRange = (enumObj: Enum<CanBeGenerated & TranslatorObj>) => {
  return filter(enumObj, (age) => age.canBeGenerated).map((age) => age.translator);
};

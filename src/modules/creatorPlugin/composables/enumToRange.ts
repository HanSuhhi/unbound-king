import { filter } from "lodash-es";

export const transformGeneraterEnumToRange = (enumObj: Record<string, CanBeGenerated & TranslatorObj>) => {
  return filter(enumObj, (_enum) => _enum.canBeGenerated).map((_enum) => _enum.translator);
};

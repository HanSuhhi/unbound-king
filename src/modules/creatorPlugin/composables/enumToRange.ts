import { filter } from "lodash";

export function transformGeneraterEnumToRange(enumObj: Record<string, CanBeGenerated & TranslatorObj>) {
  return filter(enumObj, _enum => _enum.canBeGenerated).map(_enum => _enum.translator);
}

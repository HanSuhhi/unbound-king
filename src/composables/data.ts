import { isMap, isObject } from "lodash-es";
import { DATA_Attributes } from "../modules/attribute/data/index";
import { DATA_AttributeValues } from "../modules/attributeValue/data/index";
import { DATA_Ages, DATA_Chases, DATA_Genders } from "../modules/character/enums/character.enum";
import { DATA_FamilyNames, DATA_FirstNames } from "../modules/nameDesign/data/name.data";
import { DATA_Buffs } from "../modules/buff/data/index";
import { DATA_GameIcons } from "../modules/gameIcon/data/index";
import { DATA_Destiny } from "../modules/destinyDesign/data/";
import { DATA_Lineageo } from "../modules/lineageoDesign/data/index";
import { getGlobalEnumNameOrNot } from "@/enums/global.enum";
import { DATA_Personalities } from "@/modules/personalityDesign/data";

function getKeyFromId(id: string): string {
  return id.match(/[a-zA-Z]+/)?.[0] || "";
}
function getDataKey(key: string): string {
  return `DATA_${key}s`;
}

export const DATA = {
  DATA_Genders,
  DATA_Ages,
  DATA_Chases,
  DATA_Attributes,
  DATA_AttributeValues,
  DATA_FamilyNames,
  DATA_FirstNames,
  DATA_Buffs,
  DATA_GameIcons,
  DATA_Personalities,
  DATA_Destiny,
  DATA_Lineageo
};

export function getDataById<T>(id: string): T {
  let key = getKeyFromId(id);
  key = getGlobalEnumNameOrNot(key);
  key = getDataKey(key) as unknown as keyof typeof DATA;
  return DATA[key][id];
}

export function getDataByKey<T>(key: string) {
  for (const _key in DATA) {
    const dataRange = (DATA as Record<string, Object>)[_key];
    if (!isObject(dataRange)) return;
    let value: T;
    if (isMap(dataRange)) value = (dataRange as Map<string, T>).get(key)!;
    else value = (dataRange as Dictionary<T>)[key];
    if (value) return value;
  }
}

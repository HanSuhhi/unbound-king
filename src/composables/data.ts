import { isMap, isObject } from "lodash";
import { DATA_Ages, DATA_Genders } from "../modules/character/enums/character.enum";
import { DATA_Ambitions } from "../modules/ambitionDesign/data/index";
import { DATA_Attributes } from "../modules/attribute/data/index";
import { DATA_AttributeValues } from "../modules/attributeValue/data/index";
import { DATA_Buffs } from "../modules/buff/data/index";
import { DATA_Destiny } from "../modules/destinyDesign/data/";
import { DATA_GameIcons } from "../modules/gameIcon/data/index";
import { DATA_Lineageo } from "../modules/lineageoDesign/data/index";
import { DATA_FamilyNames, DATA_FirstNames } from "../modules/nameDesign/data/name.data";
import { DATA_Personalities } from "../modules/personalityDesign/data";
import { DATA_Traits } from "../modules/traitDesign/data/index";
import { DATA_Chases } from "@/modules/character/enums/character.enum";
import { getGlobalEnumNameOrNot } from "@/enums/global.enum";

export interface IDATA {
  Genders: typeof import("../modules/character/enums/character.enum").DATA_Genders
  Ages: typeof import("../modules/character/enums/character.enum").DATA_Ages
  Chases: typeof import("../modules/character/enums/character.enum").DATA_Chases
  Attributes: typeof import("../modules/attribute/data/index").DATA_Attributes
  AttributeValues: typeof import("../modules/attributeValue/data/index").DATA_AttributeValues
  FamilyNames: typeof import("../modules/nameDesign/data/name.data").DATA_FamilyNames
  FirstNames: typeof import("../modules/nameDesign/data/name.data").DATA_FirstNames
  Buffs: typeof import("../modules/buff/data/index").DATA_Buffs
  GameIcons: typeof import("../modules/gameIcon/data/index").DATA_GameIcons
  Personalities: typeof import("../modules/personalityDesign/data").DATA_Personalities
  Ambitions: typeof import("../modules/ambitionDesign/data/index").DATA_Ambitions
  Traits: typeof import("../modules/traitDesign/data/index").DATA_Traits
  Destinies: typeof import("../modules/destinyDesign/data/").DATA_Destiny
  Lineageos: typeof import("../modules/lineageoDesign/data/index").DATA_Lineageo
}

function getKeyFromId(id: string): string {
  return id.match(/[a-zA-Z]+/)?.[0] || "";
}
function getDataKey(key: string): string {
  return `DATA_${key}s`;
}

export const DATA: IDATA = {
  Genders: DATA_Genders,
  Ages: DATA_Ages,
  Chases: DATA_Chases,
  Attributes: DATA_Attributes,
  AttributeValues: DATA_AttributeValues,
  FamilyNames: DATA_FamilyNames,
  FirstNames: DATA_FirstNames,
  Buffs: DATA_Buffs,
  GameIcons: DATA_GameIcons,
  Personalities: DATA_Personalities,
  Ambitions: DATA_Ambitions,
  Traits: DATA_Traits,
  Destinies: DATA_Destiny,
  Lineageos: DATA_Lineageo
};

export function getDataById<T>(id: string): T {
  let key = getKeyFromId(id);
  key = getGlobalEnumNameOrNot(key);
  key = getDataKey(key) as unknown as keyof typeof DATA;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
  return (DATA as any)[key][id];
}

export function getDataByKey<T>(key: keyof IDATA) {
  for (const _key in DATA) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const dataRange = (DATA as any)[_key];
    if (!isObject(dataRange)) return;
    let value: T;
    if (isMap(dataRange)) value = (dataRange as Map<string, T>).get(key)!;
    else value = (dataRange as Dictionary<T>)[key];
    if (value) return value;
  }
}

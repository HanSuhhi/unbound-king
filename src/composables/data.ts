import { getGlobalEnumNameOrNot } from "@/enums/global.enum";
import { isObject } from 'lodash-es';
import { DATA_Attributes } from '../modules/attribute/data/index';
import { DATA_AttributeValues } from "../modules/attributeValue/data/index";
import { DATA_Ages, DATA_Chases, DATA_Genders } from "../modules/character/enums/character.enum";
import { DATA_FamilyNames, DATA_FirstNames } from "../modules/nameDesign/data/name.data";
import { DATA_Buffs } from '../modules/buff/data/index';

const getKeyFromId = (id: string): string => id.match(/[a-zA-Z]+/)?.[0] || "";
const getDataKey = (key: string): string => `DATA_${key}s`;

export const DATA = {
  DATA_Genders,
  DATA_Attributes,
  DATA_AttributeValues,
  DATA_Ages,
  DATA_Chases,
  DATA_FamilyNames,
  DATA_FirstNames,
  DATA_Buffs
};

export const getDataById = <T>(id: string): T => {
  let key = getKeyFromId(id);
  key = getGlobalEnumNameOrNot(key);
  key = getDataKey(key);
  return (DATA as any)[key][id];
};

export const getDataByKey = (key: string) => {
  for (const _key in DATA) {
    const dataRange = (DATA as Record<string, Object>)[_key];
    if (!isObject(dataRange)) return;
    const value = (dataRange as Record<string, Object>)[key];
    if (value) return value;
  }
  // forEach(DATA, dataRange => {
  //   if (!isObject(dataRange)) return;

  // })
};
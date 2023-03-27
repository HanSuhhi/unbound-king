import { getGlobalEnumNameOrNot } from "@/enums/global.enum";
import { DATA_Genders, DATA_Ages, DATA_Chases } from "../modules/character/enums/character.enum";
import { DATA_AttributeValues } from "../modules/attributeValue/data/index";
import { DATA_FamilyNames, DATA_FirstNames } from "../modules/nameDesign/data/name.data";
import { DATA_Attributes } from '../modules/attribute/data/index';

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
};

export const getDataById = <T>(id: string): T => {
  let key = getKeyFromId(id);
  key = getGlobalEnumNameOrNot(key);
  key = getDataKey(key);
  return (DATA as any)[key][id];
};

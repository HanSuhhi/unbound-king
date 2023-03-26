import { getGlobalEnumNameOrNot } from "@/enums/global.enum";
import { DATA_Genders, DATA_Ages, DATA_Chases } from "../enums/character.enum";
import { DATA_AttributeValues } from "../modules/attributeValue/data/index";

const getKeyFromId = (id: string): string => id.match(/[a-zA-Z]+/)?.[0] || "";
const getDataKey = (key: string): string => `DATA_${key}s`;

export const DATA = {
  DATA_Genders,
  DATA_AttributeValues,
  DATA_Ages,
  DATA_Chases,
};

export const getDataById = <T>(id: string): T => {
  let key = getKeyFromId(id);
  key = getGlobalEnumNameOrNot(key);
  key = getDataKey(key);
  return (DATA as any)[key][id];
};

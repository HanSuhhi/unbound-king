import { DATA } from "@/composables/data";
import type { Ref } from "vue";
import { convertObjToNumberBoxValue } from "../numberModelValue";
import { forEach } from 'lodash-es';
import { useBuff } from "@/modules/buff/buff.model";


export const bindCharacterAttribute = (data: ReturnStruct[], character: Ref<Character>) => {

  forEach(data, item => {
    const attributeBuffs = DATA['DATA_Attributes'][item[2]].buffs;
    const value = Number(item[1]);
    attributeBuffs.forEach(buffName => {
      const buff = useBuff(buffName, { character: character.value, value });
      character.value.buffs.addBuff(buff);
    });
  });
  character.value['attributes'] = convertObjToNumberBoxValue(data);
};
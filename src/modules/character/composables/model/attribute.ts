import { forEach } from "lodash-es";
import type { Ref } from "vue";
import { convertObjToNumberBoxValue } from "../numberModelValue";
import type { AttributeName } from "@/modules/attribute/data";
import { DATA } from "@/composables/data";

export function bindCharacterAttribute(data: ReturnStruct<AttributeName>[], character: Ref<Character>) {
  forEach(data, ([_, value, key]) => {
    const baseValue = Number(value);
    if (!DATA.Buffs.attribute.get(key)) return;
    DATA.Buffs.attribute.get(key)!.forEach((buff) => {
      character.value.buffs.addBuffByStruct(buff, { character: character.value, baseValue });
    });
  });

  character.value.attributes = convertObjToNumberBoxValue(data);
}

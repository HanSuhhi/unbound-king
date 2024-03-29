import type { Ref } from "vue";
import { convertObjToNumberBoxValue } from "../numberModelValue";

export function bindCharacterAttributeValue(data: ReturnStruct[], character: Ref<Character>) {
  character.value["attribute-values"] = convertObjToNumberBoxValue(data);
}

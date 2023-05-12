import { ref } from "vue";
import { genCreatorData } from "../creator/composables/data";
import { bindCharacterAttributeValue } from "./composables/model/attributeValue";
import { bindCharacterAttribute } from "./composables/model/attribute";
import { CharacterBuff } from "./buff/characterBuff.model";

export function defineCharacterModel(characterData: ReturnType<typeof genCreatorData>) {
  const character = ref<Character>({
    "buffs": new CharacterBuff(),
    "attribute-values": {},
    "attributes": {}
  });

  bindCharacterAttributeValue(characterData["attribute-value-plugin"].data as any, character as any);
  bindCharacterAttribute(characterData["attribute-plugin"].data as any, character as any);

  return character;
}

const character = defineCharacterModel(genCreatorData("character"));

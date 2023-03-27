import { ref } from 'vue';
import { genCreatorData } from '../creator/composables/data';
import { bindCharacterAttributeValue } from './composables/characterAttributeValue';


const defineCharacterModel = (characterData: ReturnType<typeof genCreatorData>) => {
  const character = ref<Character>({
    "attribute-values": {}
  });

  bindCharacterAttributeValue(characterData['attribute-value-plugin'].data as any, character);

  return character;
};


defineCharacterModel(genCreatorData("character"));


import { useLineageService } from "@/composables/configs/lineage/lineage";
import { defineServiceExportFunction, useServiceModel } from "@/services/serviceModel";

function useVersion1() {
  const { all, add, removeById } = useServiceModel<Character>("character");
  const { isLineageBelongToRace } = useLineageService();

  const queryUserCharacters = defineServiceExportFunction(async () => {
    return await all();
  });

  const createCharacter = defineServiceExportFunction(async ({ character }: RegistCharacterDto) => {
    const queryCharacterList = (await queryUserCharacters());
    const characters = queryCharacterList.map(character => character.name);
    if (characters.length === 12) return;
    if (characters.includes(character.name)) return;
    if (!isLineageBelongToRace(character.race, character.lineage)) return;

    character = JSON.parse(JSON.stringify(character));
    return await add(character);
  });

  return {
    queryUserCharacters,
    createCharacter,
    removeById
  };
}

export function useCharacterDb() {
  return useVersion1();
}

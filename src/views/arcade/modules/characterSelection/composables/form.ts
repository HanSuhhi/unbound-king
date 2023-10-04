import { computed, ref } from "vue";
import { useCharacterDb } from "@/services/databases/character/character.service";

export async function useCharacterList() {
  const { queryUserCharacters } = useCharacterDb();

  const list = ref(await queryUserCharacters());
  const choosedCharacterIndex = ref<number>(0);

  const choosedCharacter = computed(() => (list.value[choosedCharacterIndex.value]).id);

  return {
    list,
    index: choosedCharacterIndex,
    choosedCharacterId: choosedCharacter
  };
}

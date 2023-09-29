import { computed, ref } from "vue";
import { useRequest } from "alova";
import { getList } from "@/api/services/character";

export function useCharacterList() {
  const { data, send } = useRequest(getList);
  const choosedCharacterIndex = ref<number>(0);

  const choosedCharacter = computed(() => (data.value.data.list[choosedCharacterIndex.value] as any)._id);

  return {
    list: data,
    index: choosedCharacterIndex,
    choosedCharacterId: choosedCharacter,
    getList: send
  };
}

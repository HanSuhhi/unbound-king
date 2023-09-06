import type { Ref } from "vue";
import { useGenderOptions } from "./genderOption";
import type { ResponseType_PostRegist } from "@/api/services/character";

export function useRegistCharacterForms(formValue: Ref<ResponseType_PostRegist | undefined>) {
  const randomCharacter = async () => {
    const [genderOptions] = await useGenderOptions();
  };
  return {
    randomCharacter
  };
}

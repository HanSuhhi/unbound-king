import type { Ref } from "vue";
import { useGenderOptions } from "./genderOption";
import { useProfessionOptions } from "./professionOption";
import { useTraitOptions } from "./traitOption";
import { useLineageOptions } from "./lineageOption";
import { useRaceOptions } from "./raceOption";
import type { ResponseType_PostRegist } from "@/api/services/character";

export function useRegistCharacterForms(formValue: Ref<ResponseType_PostRegist | undefined>) {
  const randomCharacter = async () => {
    const { sampleGender } = await useGenderOptions();
    const { sampleProfession } = await useProfessionOptions();
    const { sampleTrait } = await useTraitOptions();
    const { sampleRace } = await useRaceOptions();
    const { sampleLineage } = await useLineageOptions();

    formValue.value!.gender = sampleGender()!;
    formValue.value!.profession = sampleProfession()!;
    formValue.value!.trait = sampleTrait()!;
    formValue.value!.race = sampleRace()!;
    formValue.value!.lineage = sampleLineage()!;
  };
  return {
    randomCharacter
  };
}

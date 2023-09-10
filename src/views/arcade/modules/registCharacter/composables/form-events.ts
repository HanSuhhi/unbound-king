import type { Ref } from "vue";
import { useI18n } from "vue-i18n";
import { useGenderOptions } from "./genderOption";
import { useProfessionOptions } from "./professionOption";
import { useLineageOptions } from "./lineageOption";
import { useRaceOptions } from "./raceOption";
import type { ResponseType_PostRegist } from "@/api/services/character";

export function useRegistCharacterForms(formValue: Ref<ResponseType_PostRegist | undefined>) {
  const { locale, t } = useI18n();

  const randomCharacter = async () => {
    const { sampleGender } = await useGenderOptions(locale, t);
    const { sampleProfession } = await useProfessionOptions(locale, t);
    const { sampleRace } = await useRaceOptions(locale, t);
    const { sampleLineage } = await useLineageOptions(locale, t);

    formValue.value!.gender = sampleGender()!;
    formValue.value!.profession = sampleProfession()!;
    formValue.value!.race = sampleRace()!;
    formValue.value!.lineage = sampleLineage(formValue.value!.race)!;
  };
  return {
    randomCharacter
  };
}

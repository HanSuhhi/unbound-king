import { type Ref, inject } from "vue";
import { useI18n } from "vue-i18n";
import { useRequest } from "alova";
import { type FormInst, useMessage } from "naive-ui";
import { RegistCharacterFormRef } from "../regist-character.symbol";
import { useGenderOptions } from "./genderOption";
import { useProfessionOptions } from "./professionOption";
import { useLineageOptions } from "./lineageOption";
import { useRaceOptions } from "./raceOption";
import { type ResponseType_PostRegist, postRegist } from "@/api/services/character";
import { useStateStore } from "@/stores/state.store";
import { i18nLangModel } from "#/composables/i18n";

export function useRegistCharacterForms(formValue: Ref<ResponseType_PostRegist | undefined>) {
  const { locale, t } = useI18n();
  const formRef = inject<Ref<FormInst>>(RegistCharacterFormRef)!;
  const { send: sendRegistCharacter } = useRequest(() => postRegist(formValue.value!), { immediate: false });
  const { stateToStartGame } = useStateStore();
  const message = useMessage();

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

  const confirmCharacter = async () => {
    formRef.value?.validate(async (errors) => {
      if (!errors) {
        try {
          await sendRegistCharacter();
          message.success(t(i18nLangModel.arcade.regist_character.regist_success));
          stateToStartGame();
        }
        catch (error) {

        }
      }
    });
  };
  return {
    randomCharacter,
    confirmCharacter
  };
}

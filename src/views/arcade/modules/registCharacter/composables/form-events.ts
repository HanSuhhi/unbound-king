import { type Ref, inject } from "vue";
import { useI18n } from "vue-i18n";
import { useRequest } from "alova";
import { type FormInst, useMessage } from "naive-ui";
import { throttle } from "lodash";
import { RegistCharacterFormRef } from "../regist-character.symbol";
import { useGenderOptions } from "./genderOption";
import { useLineageOptions } from "./lineageOption";
import { useRaceOptions } from "./raceOption";
import { useTraitOption } from "./trait-option";
import { type ResponseType_PostRegist, postRegist } from "@/api/services/character";
import { useStateStore } from "@/stores/state.store";
import { i18nLangModel } from "#/composables/i18n";
import { TRANSITION_DURATION } from "@/composables/constant/env";
import { useGlobalDialog } from "@/composables/components/globalDialog";

export function useRegistCharacterForms(formValue: Ref<ResponseType_PostRegist | undefined>) {
  const { locale, t } = useI18n();
  const formRef = inject<Ref<FormInst>>(RegistCharacterFormRef)!;
  const { send: sendRegistCharacter } = useRequest(() => postRegist({
    request: formValue.value!
  }), { immediate: false });
  const { stateToStartGame } = useStateStore();
  const { warning } = useGlobalDialog();
  const { getTraits } = useTraitOption();
  const message = useMessage();

  const randomCharacter = async () => {
    const { sampleGender } = await useGenderOptions(locale, t);
    const { sampleRace } = await useRaceOptions(locale, t);
    const { sampleLineage } = await useLineageOptions(locale, t);

    formValue.value!.gender = sampleGender()!;
    formValue.value!.race = sampleRace()!;
    formValue.value!.lineage = sampleLineage(formValue.value!.race)!;
    formValue.value!.traits = await getTraits();
  };

  const confirmCharacter = throttle(async () => {
    formRef.value?.validate(async (errors) => {
      if (!errors) {
        warning({
          title: i18nLangModel.arcade.regist_character.confirm_title,
          text: i18nLangModel.arcade.regist_character.confirm_text,
          confirm: async () => {
            const result = await sendRegistCharacter();
            if ((result as unknown as ErrorResponse).error) return;
            message.success(t(i18nLangModel.arcade.regist_character.regist_success));
            stateToStartGame();
          }
        });
      }
    });
  }, TRANSITION_DURATION);
  return {
    randomCharacter,
    confirmCharacter
  };
}

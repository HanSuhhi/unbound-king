import { type Ref, inject } from "vue";
import { useI18n } from "vue-i18n";
import { type FormInst, useMessage } from "naive-ui";
import { throttle } from "lodash";
import { RegistCharacterFormRef } from "../regist-character.symbol";
import { useRegistCharacterGenderOptions } from "./gender-option";
import { useRegistCharacterLineageOptions } from "./lineage-option";
import { useRegistCharacterRaceOptions } from "./race-option";
import { useTraitOption } from "./trait-option";
import type { useRegistCharacterForm } from "./regist-character-form";
import { useStateStore } from "@/stores/state.store";
import { i18nLangModel } from "#/composables/i18n";
import { TRANSITION_DURATION } from "@/composables/constant/env";
import { useGlobalDialog } from "@/composables/components/globalDialog";
import { useCharacterDb } from "@/services/databases/character/character.service";

export function useRegistCharacterForms(formValue: ReturnType<typeof useRegistCharacterForm>["registCharacterForm"]) {
  const { locale, t } = useI18n();
  const formRef = inject<Ref<FormInst>>(RegistCharacterFormRef)!;
  const { createCharacter } = useCharacterDb();
  const { stateToStartGame } = useStateStore();
  const { warning } = useGlobalDialog();
  const { getTraits } = useTraitOption();
  const message = useMessage();

  const randomCharacter = async () => {
    const { sampleGender } = await useRegistCharacterGenderOptions(locale, t);
    const { sampleRace } = await useRegistCharacterRaceOptions(locale, t);
    const { sampleLineage } = await useRegistCharacterLineageOptions(locale, t);

    formValue.value.gender = sampleGender();
    formValue.value.race = sampleRace()!;
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
            const result = await createCharacter({ character: formValue.value });
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

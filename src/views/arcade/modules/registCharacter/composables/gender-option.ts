import type { WritableComputedRef } from "vue";
import { ref, watch } from "vue";
import { sample } from "lodash";
import type { useI18n } from "vue-i18n";
import type { SelectOption } from "naive-ui";
import { i18nLangModel } from "#/composables/i18n";
import { useGenderConfig } from "@/composables/configs/gender/gender-config";

export async function useRegistCharacterGenderOptions(locale: WritableComputedRef<string>, t: ReturnType<typeof useI18n>["t"]) {
  const { registGenders } = useGenderConfig();
  const genderOptions = ref<SelectOption[]>();

  watch(locale, () => {
    genderOptions.value = registGenders.map((gender) => {
      return {
        label: t(i18nLangModel.enum.gender[gender]),
        value: gender
      };
    });
  }, { immediate: true });

  const sampleGender = () => sample(registGenders) || registGenders[0];

  return { genderOptions, sampleGender };
}

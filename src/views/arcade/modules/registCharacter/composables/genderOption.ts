import type { WritableComputedRef } from "vue";
import { ref, watch } from "vue";
import { sample } from "lodash";
import type { useI18n } from "vue-i18n";
import type { SelectOption } from "naive-ui";
import { i18nLangModel } from "#/composables/i18n";
import { useResourseService } from "@/services/databases/resourse/resourse.service";
import type { Gender } from "#/server/modules/gender/enums/gender.enum";

export async function useGenderOptions(locale: WritableComputedRef<string>, t: ReturnType<typeof useI18n>["t"]) {
  const { getRegistCharacterGenders } = useResourseService();
  const genders = await getRegistCharacterGenders();

  const genderOptions = ref();

  watch(locale, () => {
    genderOptions.value = genders.map(({ content }) => {
      return {
        label: t(i18nLangModel.enum.gender[content as Gender]),
        value: content
      };
    });
  }, { immediate: true });

  const sampleGender = <T>(): T => sample<SelectOption>(genderOptions.value)?.value as T;

  return { genderOptions, sampleGender };
}

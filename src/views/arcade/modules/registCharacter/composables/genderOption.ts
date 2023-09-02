import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { i18nLangModel } from "#/composables/i18n";
import { useResourseService } from "@/services/databases/resourse/resourse.service";
import type { Gender } from "#/server/modules/gender/enums/gender.enum";

export async function useGenderOptions() {
  const { t, locale } = useI18n();
  const { getAllGenders } = useResourseService();
  const genders = await getAllGenders();

  const genderOptions = ref();

  watch(locale, () => {
    genderOptions.value = genders.map(({ content }) => {
      return {
        label: t(i18nLangModel.enum.gender[content as Gender]),
        value: content
      };
    });
  }, { immediate: true });

  return [genderOptions];
}

import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { i18nLangModel } from "#/composables/i18n";
import { useResourseService } from "@/services/databases/resourse/resourse.service";
import type { Profession } from "#/server/modules/professions/enums/profession.enum";

export async function useProfessionOptions() {
  const { t, locale } = useI18n();
  const { getAllProfessions } = useResourseService();
  const professions = await getAllProfessions();
  console.log("🚀 ~ file: professionOption.ts:11 ~ useProfessionOptions ~ professions:", professions);

  const professionOptions = ref();

  watch(locale, () => {
    professionOptions.value = professions.map(({ content }) => {
      return {
        label: t(i18nLangModel.enum.profession[content as Profession]),
        value: content
      };
    });
  }, { immediate: true });

  return [professionOptions];
}

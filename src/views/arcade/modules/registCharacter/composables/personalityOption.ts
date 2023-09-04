import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { i18nLangModel } from "#/composables/i18n";
import { useResourseService } from "@/services/databases/resourse/resourse.service";
import type { Personality } from "#/server/modules/personalities/enums/personality.enum";

export async function usePersonalityOptions() {
  const { t, locale } = useI18n();
  const { getAllPersonalities } = useResourseService();
  const personalities = await getAllPersonalities();

  const personalityOptions = ref();

  watch(locale, () => {
    personalityOptions.value = personalities.map(({ content }) => {
      return {
        label: t(i18nLangModel.enum.personality[content as Personality]),
        value: content
      };
    });
  }, { immediate: true });

  return [personalityOptions];
}

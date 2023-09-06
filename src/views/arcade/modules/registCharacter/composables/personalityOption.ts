import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { sample } from "lodash";
import { i18nLangModel } from "#/composables/i18n";
import { useResourseService } from "@/services/databases/resourse/resourse.service";
import type { Personality } from "#/server/modules/personalities/enums/personality.enum";

export async function usePersonalityOptions() {
  const { t, locale } = useI18n();
  const { getRegistCharacterPersonalities } = useResourseService();
  const personalities = await getRegistCharacterPersonalities();

  const personalityOptions = ref();

  watch(locale, () => {
    personalityOptions.value = personalities.map(({ content }) => {
      return {
        label: t(i18nLangModel.enum.personality[content as Personality]),
        value: content
      };
    });
  }, { immediate: true });

  const sampleGender = sample.bind(null, personalityOptions.value);

  return { personalityOptions, sampleGender };
}

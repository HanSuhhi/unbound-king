import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { i18nLangModel } from "#/composables/i18n";
import { useResourseService } from "@/services/databases/resourse/resourse.service";
import type { Trait } from "#/server/modules/traits/enums/trait.enum";

export async function useTraitOptions() {
  const { t, locale } = useI18n();
  const { getRegistCharacterTraits } = useResourseService();
  const traits = await getRegistCharacterTraits();

  const traitOptions = ref();

  watch(locale, () => {
    traitOptions.value = traits.map(({ content }) => {
      return {
        label: t(i18nLangModel.enum.trait[content as Trait]),
        value: content
      };
    });
  }, { immediate: true });

  return { traitOptions };
}

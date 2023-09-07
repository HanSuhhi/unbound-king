import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { sample } from "lodash";
import { i18nLangModel } from "#/composables/i18n";
import { useResourseService } from "@/services/databases/resourse/resourse.service";
import type { ElvesLineage, HumanLineage, YokaiLineage } from "#/server/modules/lineages/enums/lineage.enum";

export async function useLineageOptions() {
  const { t, locale } = useI18n();
  const { getRegistCharacterLineages } = useResourseService();
  const lineages = await getRegistCharacterLineages();

  const lineageOptions = ref();

  watch(locale, () => {
    lineageOptions.value = lineages.map(({ content, tags }) => {
      return {
        label: t(i18nLangModel.enum.lineage[content as HumanLineage | YokaiLineage | ElvesLineage]),
        value: content,
        tags
      };
    });
  }, { immediate: true });

  const sampleLineage = () => sample<HumanLineage | YokaiLineage | ElvesLineage>(lineageOptions.value);

  return { lineageOptions, sampleLineage };
}

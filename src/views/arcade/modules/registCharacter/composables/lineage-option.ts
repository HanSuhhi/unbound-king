import type { WritableComputedRef } from "vue";
import { ref, watch } from "vue";
import type { useI18n } from "vue-i18n";
import { sample } from "lodash";
import type { SelectOption } from "naive-ui";
import { i18nLangModel } from "#/composables/i18n";
import { useLineageConfig } from "@/composables/configs/lineage/lineage-config";
import { useLineageService } from "@/composables/configs/lineage/lineage";

export async function useRegistCharacterLineageOptions(locale: WritableComputedRef<string>, t: ReturnType<typeof useI18n>["t"]) {
  const { REGIST_LINEAGES } = useLineageConfig();
  const { getRaceFromLineage } = useLineageService();

  const lineageOptions = ref<SelectOption[]>([]);

  watch(locale, () => {
    lineageOptions.value = REGIST_LINEAGES
      .map((lineage) => {
        return {
          label: t(i18nLangModel.enum.lineage[lineage]),
          value: lineage
        };
      });
  }, { immediate: true });

  const sampleLineage = <T>(race: Race): T => {
    lineageOptions.value = REGIST_LINEAGES
      .filter(lineage => getRaceFromLineage(lineage) === race)
      .map((lineage) => {
        return {
          label: t(i18nLangModel.enum.lineage[lineage]),
          value: lineage
        };
      });
    return sample<SelectOption>(lineageOptions.value)!.value as T;
  };

  return { lineageOptions, sampleLineage };
}

import type { WritableComputedRef } from "vue";
import { ref, watch } from "vue";
import type { useI18n } from "vue-i18n";
import { sample } from "lodash";
import type { SelectOption } from "naive-ui";
import { i18nLangModel } from "#/composables/i18n";
import { useResourseService } from "@/services/databases/resourse/resourse.service";
import type { ResponseType_PostRegist } from "@/api/services/character";
import type { Resourse } from "@/services/databases/resourse/resourse.table";
import type { ElvesLineage, HumanLineage, YokaiLineage } from "#/server/modules/lineages/enums/lineages.enum";

export async function useLineageOptions(locale: WritableComputedRef<string>, t: ReturnType<typeof useI18n>["t"]) {
  const { getRegistCharacterLineages } = useResourseService();
  const lineages = await getRegistCharacterLineages();

  const lineageOptions = ref<Array<SelectOption & { tags: Resourse["tags"] }>>([]);

  watch(locale, () => {
    lineageOptions.value = lineages
      .map(({ content, tags }) => {
        return {
          label: t(i18nLangModel.enum.lineage[content as HumanLineage | YokaiLineage | ElvesLineage]),
          value: content,
          tags
        };
      });
  }, { immediate: true });

  const sampleLineage = <T>(race: ResponseType_PostRegist["race"]): T => {
    lineageOptions.value = lineages
      .filter(({ tags }) => tags!.includes(race))
      .map(({ content, tags }) => {
        return {
          label: t(i18nLangModel.enum.lineage[content as HumanLineage | YokaiLineage | ElvesLineage]),
          value: content,
          tags
        };
      });
    return sample<SelectOption>(lineageOptions.value)!.value as T;
  };

  return { lineageOptions, sampleLineage };
}

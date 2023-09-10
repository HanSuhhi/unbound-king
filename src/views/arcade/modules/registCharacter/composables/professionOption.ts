import type { WritableComputedRef } from "vue";
import { ref, watch } from "vue";
import type { useI18n } from "vue-i18n";
import { sample } from "lodash";
import type { SelectOption } from "naive-ui";
import { i18nLangModel } from "#/composables/i18n";
import { useResourseService } from "@/services/databases/resourse/resourse.service";
import type { Profession } from "#/server/modules/professions/enums/profession.enum";

export async function useProfessionOptions(locale: WritableComputedRef<string>, t: ReturnType<typeof useI18n>["t"]) {
  const { getRegistCharacterProfessions } = useResourseService();
  const professions = await getRegistCharacterProfessions();

  const professionOptions = ref();

  watch(locale, () => {
    professionOptions.value = professions.map(({ content }) => {
      return {
        label: t(i18nLangModel.enum.profession[content as Profession]),
        value: content
      };
    });
  }, { immediate: true });

  const sampleProfession = <T>(): T => sample<SelectOption>(professionOptions.value)!.value as T;

  return { professionOptions, sampleProfession };
}

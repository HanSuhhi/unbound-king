import type { WritableComputedRef } from "vue";
import { ref, watch } from "vue";
import type { useI18n } from "vue-i18n";
import { sample } from "lodash";
import type { SelectOption } from "naive-ui";
import { i18nLangModel } from "#/composables/i18n";
import { useResourseService } from "@/services/databases/resourse/resourse.service";
import type { Race } from "#/server/modules/races/enums/race.enum";

export async function useRaceOptions(locale: WritableComputedRef<string>, t: ReturnType<typeof useI18n>["t"]) {
  const { getRegistCharacterRaces } = useResourseService();
  const races = await getRegistCharacterRaces();

  const raceOptions = ref();

  watch(locale, () => {
    raceOptions.value = races.map(({ content }) => {
      return {
        label: t(i18nLangModel.enum.race[content as Race]),
        value: content
      };
    });
  }, { immediate: true });

  const sampleRace = <T>(): T => sample<SelectOption>(raceOptions.value)?.value as T;

  return { raceOptions, sampleRace };
}

import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { sample } from "lodash";
import { i18nLangModel } from "#/composables/i18n";
import { useResourseService } from "@/services/databases/resourse/resourse.service";
import type { Race } from "#/server/modules/races/enums/race.enum";

export async function useRaceOptions() {
  const { t, locale } = useI18n();
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

  const sampleRace = () => sample<Race>(raceOptions.value);

  return { raceOptions, sampleRace };
}

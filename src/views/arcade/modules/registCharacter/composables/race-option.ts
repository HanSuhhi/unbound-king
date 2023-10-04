import type { WritableComputedRef } from "vue";
import { ref, watch } from "vue";
import type { useI18n } from "vue-i18n";
import { sample } from "lodash";
import type { SelectOption } from "naive-ui";
import { i18nLangModel } from "#/composables/i18n";
import { useRaceConfig } from "@/composables/configs/race/race-config";

export async function useRegistCharacterRaceOptions(locale: WritableComputedRef<string>, t: ReturnType<typeof useI18n>["t"]) {
  const { REGIST_RACES } = useRaceConfig();
  const raceOptions = ref();

  watch(locale, () => {
    raceOptions.value = REGIST_RACES.map((race) => {
      return {
        label: t(i18nLangModel.enum.race[race]),
        value: race
      };
    });
  }, { immediate: true });

  const sampleRace = <T>(): T => sample<SelectOption>(raceOptions.value)?.value as T;

  return { raceOptions, sampleRace };
}

import { isUndefined } from "lodash";
import type { WritableComputedRef } from "vue";
import { provide, ref, watch } from "vue";
import { DATA_Creators } from "../data/index";
import { genCreatorData } from "./data";
import type { usePluginTest } from "./pluginTest";

export function useActiveCreator(code: WritableComputedRef<string>) {
  const activeCreatorKey = ref<CreatorKey>("character");
  const activeCreator = ref(DATA_Creators[activeCreatorKey.value]);
  const creatorTestData = ref<Record<string, ReturnType<typeof usePluginTest>>>({});

  const changed = ref<boolean>();

  watch(
    activeCreatorKey,
    (key) => {
      activeCreator.value = DATA_Creators[key];
      creatorTestData.value = genCreatorData("character");
      changed.value = undefined;
    },
    { immediate: true }
  );

  watch(
    activeCreator,
    (newCreator) => {
      code.value = JSON.stringify(newCreator);

      if (isUndefined(changed.value)) changed.value = false;
      else changed.value = true;
    },
    { immediate: true, deep: true }
  );

  provide("changed", changed);
  provide("creator-key", activeCreatorKey);
  provide("creator", activeCreator);
  provide("test-data", creatorTestData);

  return [activeCreator];
}

import { isUndefined } from "lodash-es";
import type { WritableComputedRef } from "vue";
import { provide, ref, watch } from "vue";
import { DATA_Creators } from "../data/index";
import { usePluginTest } from "./pluginTest";

export const useActiveCreator = (code: WritableComputedRef<string>) => {
  const activeCreatorIndex = ref(0);
  const activeCreator = ref<Creator>(DATA_Creators[activeCreatorIndex.value]);
  const creatorTestData = ref<Record<string, ReturnType<typeof usePluginTest>>>({});

  const changed = ref<boolean>();

  watch(
    activeCreatorIndex,
    (newIndex) => {
      activeCreator.value = DATA_Creators[newIndex];
      activeCreator.value.plugins.forEach((plugin) => {
        creatorTestData.value[plugin.translator.key] = usePluginTest(plugin, creatorTestData.value);
      });
      changed.value = undefined;
    },
    { immediate: true },
  );

  watch(
    activeCreator,
    (newCreator) => {
      code.value = JSON.stringify(newCreator);

      if (isUndefined(changed.value)) changed.value = false;
      else changed.value = true;
    },
    { immediate: true, deep: true },
  );

  provide("changed", changed);
  provide("creator-tabs-index", activeCreatorIndex);
  provide("creator", activeCreator);
  provide("test-data", creatorTestData);

  return [activeCreator];
};

import { toArray } from "lodash-es";
import { defineStore, storeToRefs } from "pinia";
import { computed } from "vue";
import { defineModules } from "../data/modules";
import { useGlobalStore } from "@/stores/global.store";

const useAppAsideStore = defineStore("app-aside", () => {
  const { activeAsideModule } = storeToRefs(useGlobalStore());
  const modules = defineModules();

  const activeModules = computed(() => toArray(modules.value).filter((menu) => menu.show));
  const activeModule = computed(() => {
    return activeModules.value[activeAsideModule.value];
  });

  return { modules, activeModules, activeModule };
});
export { useAppAsideStore };

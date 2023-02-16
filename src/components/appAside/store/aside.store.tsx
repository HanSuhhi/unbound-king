import { useGlobalStore } from "@/stores/global.store";
import { find, findIndex } from "lodash-es";
import { defineStore, storeToRefs } from "pinia";
import { computed } from "vue";
import { defineModules } from "../data/modules";

const useAppAsideStore = defineStore("app-aside", () => {
  const { activeAsideModule } = storeToRefs(useGlobalStore());
  const modules = defineModules();

  const activeModules = computed(() => modules.value.filter((menu) => menu.show));
  const activeModule = computed(() => {
    return find(activeModules.value, (activeModule) => activeModule.key === activeAsideModule.value);
  });
  const active = computed(() => findIndex(activeModules.value, activeModule.value));

  return { modules, activeModules, activeModule, active };
});
export { useAppAsideStore };

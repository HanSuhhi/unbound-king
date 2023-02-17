import { useGlobalStore } from "@/stores/global.store";
import { usePlayerStore } from "@/stores/player.store";
import { find, findIndex, flatMap } from "lodash-es";
import { defineStore, storeToRefs } from "pinia";
import { computed, onBeforeMount, ref } from "vue";
import { defineModuleAuthKey } from "../../../composables/routerAuth";
import { defineModules } from "../data/modules";

const useAppAsideStore = defineStore("app-aside", () => {
  const { activeAsideModule } = storeToRefs(useGlobalStore());
  const { states } = storeToRefs(usePlayerStore());
  const modules = defineModules();
  const pages = computed(() => {
    return flatMap(modules.value, (module) => {
      module.pages.forEach((page) => {
        const auth = defineModuleAuthKey(module.key);
        page.auth.add(auth);
        page.module = module.key;
      });
      return module.pages;
    });
  });

  const activeModules = computed<AppAsideModule[]>(() => {
    return modules.value.filter((module) => {
      const auth = defineModuleAuthKey(module.key) as keyof typeof states.value;
      return states.value[auth];
    });
  });
  const activeModule = computed(() => {
    return find(activeModules.value, (activeModule) => activeModule.key === activeAsideModule.value);
  });
  const activeModuleIndex = computed(() => findIndex(activeModules.value, activeModule.value));

  const activeMenuIndex = ref(0);

  return { modules, pages, activeModules, activeModule, activeModuleIndex, activeMenuIndex };
});
export { useAppAsideStore };

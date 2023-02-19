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

  const perfectPage = (page: ModulePage, module: AsideModule) => {
    const auth = defineModuleAuthKey(module.key);
    page.auth.add(auth);
    page.module = module.key;
    return page;
  };

  const pages = computed(() => {
    return flatMap(modules.value, (module) => {
      return flatMap(module.pages, (page) => {
        if (page.children) return page.children;
        else return page;
      }).map((page) => perfectPage(page, module));
    });
  });

  const activeModules = computed<AsideModule[]>(() => {
    return modules.value.filter((module) => {
      const auth = defineModuleAuthKey(module.key) as keyof typeof states.value;
      return states.value[auth];
    });
  });
  const activeModule = computed(() => {
    return find(activeModules.value, (activeModule) => activeModule.key === activeAsideModule.value);
  });
  const activeModuleIndex = computed(() => findIndex(activeModules.value, activeModule.value));

  const activeMenuIndex = ref<string>("0");

  return { modules, pages, activeModules, activeModule, activeModuleIndex, activeMenuIndex };
});
export { useAppAsideStore };

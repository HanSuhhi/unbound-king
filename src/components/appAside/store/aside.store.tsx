import { usePlayerStore } from "@/stores/player.store";
import { flatMap } from "lodash-es";
import { defineStore, storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { defineModuleAuthKey } from "../../../composables/routerAuth";
import { defineModules } from "../data/modules";

const useAppAsideStore = defineStore("app-aside", () => {
  const { states } = storeToRefs(usePlayerStore());
  const modules = defineModules();

  const _perfectPage = (page: ModulePage, module: AsideModule) => {
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
      }).map((page) => _perfectPage(page, module));
    });
  });

  const activeModules = computed<AsideModule[]>(() => {
    return modules.value.filter((module) => {
      const auth = defineModuleAuthKey(module.key) as keyof typeof states.value;
      return states.value[auth];
    });
  });

  const activeMenuIndex = ref<string>("0");

  return { modules, pages, activeModules, activeMenuIndex };
});
export { useAppAsideStore };

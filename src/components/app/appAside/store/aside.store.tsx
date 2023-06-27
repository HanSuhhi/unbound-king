import { flatMap } from "lodash";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { defineModules } from "../data/modules";

const useAppAsideStore = defineStore("app-aside", () => {
  const modules = defineModules();

  const _perfectPage = (page: ModulePage, module: AsideModule) => {
    page.module = module.key;
    return page;
  };

  const pages = computed(() => {
    return flatMap(modules.value, (module) => {
      return flatMap(module.pages, (page) => {
        if (page.children) return page.children;
        else return page;
      }).map(page => _perfectPage(page, module));
    });
  });

  /**
   * @description Filter the aside entry list based on permissions
   */
  // @TODO
  const activeModules = computed<AsideModule[]>(() => {
    return modules.value;
    // console.log("modules.value: ", modules.value);
    // return modules.value.filter((module) => {
    //   return states.value;
    // });
  });

  const activeMenuIndex = ref<string>("0");

  return { modules, pages, activeModules, activeMenuIndex };
});
export { useAppAsideStore };

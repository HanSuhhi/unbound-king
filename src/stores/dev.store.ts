import { defineStore } from "pinia";
import { ref } from "vue";
import type { MenuOption } from "naive-ui";
import { i18nLangModel } from "#/composables/i18n";
import { parseImportModule } from "@/composables/ci/importModule";

type HistoryItem = [routeName: string, title: string, icon: BaseIconName];

function selectAllModuleKeys(items: MenuOption[]): string[] {
  let answer: string[] = [];
  for (const item of items) {
    answer.push(item.key as string);
    if (item.children)
      answer = answer.concat(selectAllModuleKeys(item.children));
  }

  return answer;
}

const useDevStore = defineStore("dev-store", () => {
  // TODO import async
  const data = parseImportModule(import.meta.glob("@/components/app/appAside/data/*.module.ts", { eager: true }), true);
  const routes = ref<HistoryItem[]>([]);

  const pushRoute = (route: HistoryItem) => {
    const haveRoute = routes.value.map(originRoute => originRoute[0]).includes(route[0]);
    if (haveRoute) return;
    routes.value.push(route);
  };

  const activeAsideModule = ref<AsideModule>();
  const activePage = ref<MenuOption>();

  const modules = ref<AsideModule[]>([
    {
      key: "assets",
      title: i18nLangModel.aside.modules.assets,
      icon: "asset",
      pages: data.assets,
      keys: selectAllModuleKeys(data.assets)
    },
    {
      key: "dev",
      title: i18nLangModel.aside.modules.dev,
      icon: "development",
      pages: data.dev,
      keys: selectAllModuleKeys(data.dev)
    }
    // {
    //   key: "project",
    //   title: "项目模块",
    //   icon: "add-package",
    //   type: "default-menu",
    //   pages: data.project
    // }
  ]);

  return {
    routes,
    pushRoute,
    modules,
    activeAsideModule,
    activePage
  };
});
export { useDevStore };

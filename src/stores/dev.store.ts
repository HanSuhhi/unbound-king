import { defineStore } from "pinia";
import { ref } from "vue";
import type { MenuOption } from "naive-ui";
import { i18nLangModel } from "#/composables/i18n";
import { parseImportModule } from "@/composables/ci/importModule";

type HistoryItem = [routeName: string, title: string, icon: BaseIconName];
const data = parseImportModule(import.meta.glob("@/components/app/appAside/data/*.module.ts", { eager: true }), true);

const useDevStore = defineStore("dev-store", () => {
  const routes = ref<HistoryItem[]>([]);
  const activeAsideModule = ref<AsideModule>();
  const activePage = ref<MenuOption>();

  const modules = ref<AsideModule[]>([
    {
      key: "assets",
      title: i18nLangModel.aside.modules.assets,
      icon: "asset",
      pages: data.assets
    },
    {
      key: "dev",
      title: i18nLangModel.aside.modules.dev,
      icon: "development",
      pages: data.dev
    }
    // {
    //   key: "project",
    //   title: "项目模块",
    //   icon: "add-package",
    //   type: "default-menu",
    //   pages: data.project
    // }
  ]);

  return { routes, modules, activeAsideModule, activePage };
});
export { useDevStore };

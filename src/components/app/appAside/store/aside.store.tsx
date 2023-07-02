import { defineStore } from "pinia";
import { ref } from "vue";
import { i18nLangModel } from "#/composables/i18n";
import { parseImportModule } from "@/composables/ci/importModule";

const data = parseImportModule(import.meta.glob("../data/*.module.ts", { eager: true }), true);

const useAppAsideStore = defineStore("app-aside", () => {
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

  return { modules };
});

export { useAppAsideStore };

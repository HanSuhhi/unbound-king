import { ref, watchEffect } from "vue";
import { parseImportModule } from "@/composables/ci/importModule";

const data = parseImportModule(import.meta.glob("./*.module.ts", { eager: true }), true);
export function defineModules() {
  const modules = ref<AsideModule[]>([]);

  watchEffect(() => {
    modules.value = [
      {
        key: "dev",
        title: "开发者模块",
        icon: "development",
        type: "default-menu",
        pages: data.dev
      },
      {
        key: "project",
        title: "项目模块",
        icon: "add-package",
        type: "default-menu",
        pages: data.project
      }

    ];
  });

  return modules;
}

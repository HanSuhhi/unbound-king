import { parseImportModule } from "@/composables/ci/importModule";
import { ref, watchEffect } from "vue";

const data = parseImportModule(import.meta.glob("./*.module.ts", { eager: true }), true);

export const defineModules = () => {
  const modules = ref<AsideModule[]>([]);

  watchEffect(() => {
    modules.value = [
      {
        key: "auth",
        title: "权限模块",
        icon: "authentication",
        type: "default-menu",
        pages: data["auth"],
      },
      {
        key: "dev",
        title: "开发者模块",
        icon: "development",
        type: "default-menu",
        pages: data["dev"],
      },
      {
        key: "project",
        title: "项目模块",
        icon: "project",
        type: "default-menu",
        pages: data["project"],
      },
      {
        key: "creator",
        title: "创造器模块",
        icon: "light",
        type: "default-menu",
        pages: data["creator"],
      },
    ];
  });

  return modules;
};

// @unocss-include
import { ref, watchEffect } from "vue";
import { authModuleConfig } from "./authModuleConfig";
import { devModuleConfig } from "./devModuleConfig";
import { packageModuleConfig } from "./PackageModuleConfig";
import { projectModuleConfig } from "./projectModuleConfig";

export const defineModules = () => {
  const modules = ref<AsideModule[]>([]);

  watchEffect(() => {
    modules.value = [
      {
        key: "auth",
        title: "权限模块",
        icon: "authentication",
        type: "default-menu",
        pages: authModuleConfig,
      },
      {
        key: "dev",
        title: "开发者模块",
        icon: "development",
        type: "default-menu",
        pages: devModuleConfig,
      },
      {
        key: "package",
        title: "包体模块",
        icon: "package",
        type: "default-menu",
        pages: packageModuleConfig,
      },
      {
        key: "project",
        title: "项目模块",
        icon: "project",
        type: "default-menu",
        pages: projectModuleConfig,
      },
    ];
  });

  return modules;
};

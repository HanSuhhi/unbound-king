// @unocss-include
import { ref, watchEffect } from "vue";
import { authModuleConfig } from "./authModuleConfig";
import { devModuleConfig } from "./devModuleConfig";
import { packageModuleConfig } from "./PackageModuleConfig";

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
    ];
  });

  return modules;
};

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
        icon: "i-carbon-two-factor-authentication",
        type: "default-menu",
        pages: authModuleConfig,
      },
      {
        key: "dev",
        title: "开发者模块",
        icon: "i-tabler-device-analytics",
        type: "default-menu",
        pages: devModuleConfig,
      },
      {
        key: "package",
        title: "包体模块",
        icon: "i-lucide-package",
        type: "default-menu",
        pages: packageModuleConfig,
      },
      // {
      //   key: "game",
      //   icon: "i-material-symbols-view-module",
      //   type: "default-menu",
      //   pages: authModuleConfig,
      // },
    ];
  });

  return modules;
};

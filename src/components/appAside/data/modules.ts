import { ref, watchEffect } from "vue";
import { authModuleConfig } from "./authModuleConfig";
import { devModuleConfig } from "./devModuleConfig";

export const defineModules = () => {
  const modules = ref<AppAsideModule[]>([]);

  watchEffect(() => {
    modules.value = [
      {
        key: "auth",
        icon: "i-carbon-two-factor-authentication",
        type: "default-menu",
        pages: authModuleConfig,
      },
      {
        key: "dev",
        icon: "i-tabler-device-analytics",
        type: "default-menu",
        pages: devModuleConfig,
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

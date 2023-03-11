// @unocss-include
import { defineModuleConfig } from "../composables/moduleConfig";

export const projectModuleConfig: ModulePage[] = defineModuleConfig([
  {
    path: "base-icon",
    title: "基础图标",
    description: "项目框架所使用图标",
    icon: "dashboard",
  },
]);

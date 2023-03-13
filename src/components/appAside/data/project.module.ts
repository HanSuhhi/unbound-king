import { defineModuleConfig } from "../composables/moduleConfig";

export default <ModulePage[]>defineModuleConfig([
  {
    path: "base-icon",
    title: "基础图标",
    description: "项目框架所使用图标",
    icon: "dashboard",
  },
  {
    path: "package-extra-design",
    title: "拓展包设计",
    description: "来设计自己的包！",
    icon: "package",
  },
]);

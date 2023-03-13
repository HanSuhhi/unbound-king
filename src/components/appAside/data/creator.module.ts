import { defineModuleConfig } from "../composables/moduleConfig";

export default <ModulePage[]>defineModuleConfig([
  {
    path: "creator-plugin",
    title: "创造器插件",
    icon: "light",
    description: "把它理解为乐高积木！",
  },
  {
    path: "creator",
    title: "创造器",
    icon: "combine",
    description: "用乐高搭建大厦！",
  },
]);

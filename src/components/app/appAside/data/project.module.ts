import { defineModuleConfig } from "../composables/moduleConfig";

export default defineModuleConfig([
  {
    path: "base-icon",
    title: "基础图标",
    description: "项目框架所使用图标",
    icon: "icons"
  },
  {
    path: "package-design",
    title: "包设计",
    description: "来设计自己的包！",
    icon: "package",
    children: [
      {
        path: "package-extra-design",
        title: "拓展包设计",
        description: "设计第二个世界！",
        icon: "add-package"
      }
    ]
  },
  {
    path: "creator-settings",
    title: "创造器设置",
    description: "创造器相关内容",
    icon: "light",
    children: [
      {
        path: "creator-plugin",
        title: "创造器插件",
        icon: "plugin",
        description: "把它理解为乐高积木！"
      },
      {
        path: "creator",
        title: "创造器",
        icon: "combine",
        description: "用乐高搭建大厦！"
      }
    ]
  }
]);

// @unocss-include
import { defineModuleConfig } from "../composables/moduleConfig";

export const devModuleConfig: ModulePage[] = defineModuleConfig([
  {
    path: "icon-manage",
    title: "图标管理",
    description: "图标相关内容",
    icon: "icons",
    children: [
      {
        path: "base-icon",
        title: "基础图标",
        description: "项目框架所使用图标",
        icon: "dashboard",
      },
      {
        path: "game-icon",
        title: "游戏图标",
        description: "游玩中用到的图标",
        icon: "game-icon",
      },
    ],
  },
  {
    path: "attribute-design",
    title: "属性设置",
    description: "人物属性 / 属性值",
    icon: "code",
    children: [
      {
        path: "attribute-value",
        title: "属性值",
        description: "角色数值属性及含义",
        icon: "list",
      },
    ],
  },
  {
    path: "nation-design",
    title: "种族一览",
    description: "种族相关参数修正",
    icon: "monster",
    children: [
      {
        path: "destiny-design",
        title: "种族设计",
        description: "查看所有种族参数",
        icon: "relation",
      },
      {
        path: "ethnicity-design",
        title: "族裔设计",
        description: "查看、控制族裔参数",
        icon: "abstract",
      },
      {
        path: "lineageo-design",
        title: "血统设计",
        description: "查看、控制血统参数",
        icon: "lineageos",
      },
    ],
  },
  {
    path: "skill-design",
    title: "技能设计",
    description: "技能参数设置",
    icon: "character-param",
  },
  {
    path: "ambition-design",
    title: "抱负设计",
    description: "角色抱负相关设计",
    icon: "choice",
  },
]);

import { defineModuleConfig } from "../composables/moduleConfig";

export default defineModuleConfig([
  {
    path: "game-icon",
    title: "游戏图标",
    description: "游玩中用到的图标",
    icon: "icons"
  },
  {
    path: "name-design",
    title: "姓名设计",
    description: "设计人物姓名",
    icon: "thinking"
  },
  {
    path: "attribute-design",
    title: "属性设置",
    description: "人物属性 / 属性值",
    icon: "thinking",
    children: [
      {
        path: "attribute-value",
        title: "属性值",
        description: "人物数值属性及含义",
        icon: "thinking"
      },
      {
        path: "attribute",
        title: "属性",
        description: "人物属性及属性效果",
        icon: "thinking"
      }
    ]
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
        icon: "monster"
      },
      {
        path: "lineageo-design",
        title: "血统设计",
        description: "查看、控制血统参数",
        icon: "monster"
      }
    ]
  },
  {
    path: "skill-design",
    title: "技能设计",
    description: "技能参数设置",
    icon: "character-param"
  },
  {
    path: "personality-design",
    title: "个性设计",
    description: "每个角色都有脾气！",
    icon: "thinking"
  },
  {
    path: "ambition-design",
    title: "抱负设计",
    description: "人物抱负相关设计",
    icon: "thinking"
  }
]);

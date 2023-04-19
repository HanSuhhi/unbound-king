import { defineModuleConfig } from "../composables/moduleConfig";

export default defineModuleConfig([
  {
    path: "game-icon",
    title: "游戏图标",
    description: "游玩中用到的图标",
    icon: "icons"
  },

  {
    path: "character-design",
    title: "角色设计",
    description: "角色的各项设计",
    icon: "thinking",
    children: [
      {
        path: "name-design",
        title: "姓名设计",
        description: "设计角色姓名",
        icon: "thinking"
      },
      {
        path: "attribute-value",
        title: "属性值",
        description: "角色数值属性及含义",
        icon: "thinking"
      },
      {
        path: "attribute",
        title: "属性",
        description: "角色属性及属性效果",
        icon: "thinking"
      },
      {
        path: "personality-design",
        title: "个性设计",
        description: "每个角色都有脾气！",
        icon: "thinking"
      },
      {
        path: "trait-design",
        title: "特征设计",
        description: "角色是灰的。",
        icon: "thinking"
      },
      {
        path: "ambition-design",
        title: "抱负设计",
        description: "角色抱负相关设计",
        icon: "thinking"
      }
    ]
  },

  {
    path: "ethnicity-design",
    title: "族裔设计",
    description: "包含种族、血统",
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
  }

]);

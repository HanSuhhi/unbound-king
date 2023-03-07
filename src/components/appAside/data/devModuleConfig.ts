// @unocss-include
import { defineModuleConfig } from "../composables/moduleConfig";

export const devModuleConfig: ModulePage[] = defineModuleConfig([
  {
    path: "icon-setting",
    title: "图标管理",
    description: "所使用的所有图标",
    icon: "i-uil-icons",
  },
  {
    path: "attribute-design",
    title: "属性设置",
    description: "人物属性 / 属性值",
    icon: "i-carbon-property-relationship",
    children: [
      {
        path: "attribute-value",
        title: "属性值",
        description: "角色数值属性及含义",
        icon: "i-iconoir-numbered-list-right",
      },
    ],
  },
  {
    path: "nation-design",
    title: "种族一览",
    description: "种族相关参数修正",
    icon: "i-emojione-monotone-alien-monster",
    children: [
      {
        path: "destiny-design",
        title: "种族设计",
        description: "查看所有种族参数",
        icon: "i-ps-tribe",
      },
      {
        path: "ethnicity-design",
        title: "族裔设计",
        description: "查看、控制族裔参数",
        icon: "i-game-icons-abstract-065",
      },
      {
        path: "lineageo-design",
        title: "血统设计",
        description: "查看、控制血统参数",
        icon: "i-simple-icons-lineageos",
      },
    ],
  },
  {
    path: "skill-design",
    title: "技能设计",
    description: "技能参数设置",
    icon: "i-game-icons-skills",
  },
  {
    path: "ambition-design",
    title: "抱负设计",
    description: "角色抱负相关设计",
    icon: "i-game-icons-choice",
  },
]);

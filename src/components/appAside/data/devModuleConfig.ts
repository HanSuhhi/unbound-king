import { defineModuleConfig } from "../composables/moduleConfig";

export const devModuleConfig: ModulePage[] = defineModuleConfig([
  {
    path: "nation-design",
    title: "种族一览",
    description: "种族相关参数修正",
    redirect: "destiny-design",
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
]);

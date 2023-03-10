import { defineModuleConfig } from "../composables/moduleConfig";

export const authModuleConfig: ModulePage[] = defineModuleConfig([
  {
    path: "hero-choose",
    title: "英雄选择",
    icon: "knight",
    description: "开始游戏吧！",
  },
]);

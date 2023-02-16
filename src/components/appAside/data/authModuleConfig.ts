import { defineModuleConfig } from "../composables/moduleConfig";

export const authModuleConfig: ModulePage[] = defineModuleConfig([
  {
    path: "hero-choose",
    name: "英雄选择",
    icon: "i-mdi-horse-human",
  },
]);

import { defineModuleConfig } from "../composables/moduleConfig";

export const devModuleConfig: ModulePage[] = defineModuleConfig([
  {
    path: "nation-design",
    title: "种族一览",
    redirect: "destiny-design",
    icon: "i-emojione-monotone-alien-monster",
    children: [
      {
        path: "destiny-design",
        title: "种族设计",
        icon: "i-ps-tribe",
      },
      {
        path: "ethnicity-design",
        title: "族裔设计",
        icon: "i-game-icons-abstract-065",
      },
      {
        path: "lineageo-design",
        title: "血统设计",
        icon: "i-simple-icons-lineageos",
      },
    ],
  },
]);

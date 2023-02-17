import { defineModuleConfig } from "../composables/moduleConfig";

export const devModuleConfig: ModulePage[] = defineModuleConfig([
  {
    path: "nation-design",
    title: "种族设计",
    redirect: "destiny-design",
    icon: "i-emojione-monotone-alien-monster",
    children: [
      {
        path: "destiny-design",
        title: "种族详情",
        icon: "i-ps-tribe",
      },
      {
        path: "ethnicity-design",
        title: "族裔详情",
        icon: "i-game-icons-abstract-065",
      },
      {
        path: "lineageo-design",
        title: "血统详情",
        icon: "i-simple-icons-lineageos",
      },
    ],
  },
]);

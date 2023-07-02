import { h } from "vue";
import type { MenuOption } from "naive-ui";
import MenuItem from "../components/baseMenu/MenuItem.vue";
import AppMenuIcon from "../components/baseMenu/AsideMenuIcon.vue";

const routes: MenuOption[] = [
  {
    key: "game-icon",
    label: () => h(MenuItem, {
      title: "游戏图标",
      path: "game-icon",
      description: "游玩中用到的图标"
    }),
    icon: () => h(AppMenuIcon, {
      icon: "icons"
    })
  }
];

export default routes;

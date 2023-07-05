import { defineMenuOptions } from "../composables/menuOption";

const routes = defineMenuOptions([
  {
    key: "base-icon",
    // head: i18nLangModel.asideModules["base-icon"].title,
    // description: "项目框架所使用图标",
    tip: "icons"
  },
  {
    key: "game-icon",
    // head: i18nLangModel.asideModules["game-icon"].title,
    // description: i18nLangModel.asideModules["game-icon"].desc,
    tip: "icons"
  }
]);

export default routes;

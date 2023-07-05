import type { MenuOption } from "naive-ui";
import { h } from "vue";
import MenuItem from "../components/baseMenu/MenuItem.vue";
import AppMenuIcon from "../components/baseMenu/AsideMenuIcon.vue";
import { i18nLangModel } from "#/composables/i18n";

export function defineMenuOptions(options: MenuOption[]): MenuOption[] {
  options.forEach((option) => {
    if (option.children) defineMenuOptions(option.children);

    option.head = i18nLangModel.asideModules[option.key].title;
    option.description = i18nLangModel.asideModules[option.key].desc;

    option.label = () => h(MenuItem, {
      title: option.head,
      path: option.children ? "" : option.key,
      description: option.description
    });
    option.icon = () => h(AppMenuIcon, { icon: option.tip });
  });

  return options;
}

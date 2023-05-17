import "uno.css";
import "./styles/index.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { useRouteConfig } from "./composables/router/router";
import App from "./App.vue";
import Icon from "./components/Icon.vue";
import TypeButton from "./components/typeButton/TypeButton.vue";
import CTabs from "./components/ui/tabs";
import CLayout from "./components/ui/layout";
import { usePaperRipple } from "./directives/paperRipple";
import { defineI18n } from "./locals/index";
import { disableDefaultKeys } from "./composables/experience/hotkey";

const pinia = createPinia();
const i18n = defineI18n();
const { router } = useRouteConfig();
const { paperRipple } = usePaperRipple();
disableDefaultKeys();

createApp(App)
  .use(pinia)
  .use(router)
  .use(i18n)
  .component("base-layout", CLayout)
  .component("base-tabs", CTabs)
  .component("icon", Icon)
  .component("type-button", TypeButton)
  .directive("paperRipple", paperRipple)
  .mount("#app");

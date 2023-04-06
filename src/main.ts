import CTabs from "./components/ui/tabs";
import CLayout from "./components/ui/layout";

import "uno.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import "./styles/index.css";
import "./config.css";

import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { useRouteConfig } from "./composables/router/router";
import { useIndexDb } from "./services/index";
import Icon from "./components/Icon.vue";

const pinia = createPinia();
const { router } = await useRouteConfig();
await useIndexDb();

createApp(App)
  .use(pinia)
  .use(router)
  .component("base-layout", CLayout)
  .component("base-tabs", CTabs)
  .component("icon", Icon)
  .mount("#app");

// import "./modules/character/character.model";

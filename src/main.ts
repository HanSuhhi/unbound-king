import "uno.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import "./styles/index.css";
import "./config.css";

import { createApp } from "vue";
import App from "./App.vue";
import createCsssUI from "csss-ui";
import { createPinia } from "pinia";
import { useRouteConfig } from "./composables/router";
import { useIndexDb } from "./services/index";

const csssUI = createCsssUI();
const pinia = createPinia();
const { router } = await useRouteConfig();
await useIndexDb();

createApp(App).use(csssUI).use(pinia).use(router).mount("#app");


import "./modules/character/character.model";
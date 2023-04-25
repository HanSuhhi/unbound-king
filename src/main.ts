import "uno.css";
import "./styles/index.css";
import "./config.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { useRouteConfig } from "./composables/router/router";
import { useIndexDb } from "./services/index";
import App from "./App.vue";
import Icon from "./components/Icon.vue";
import TypeButton from "./components/typeButton/TypeButton.vue";
import CTabs from "./components/ui/tabs";
import CLayout from "./components/ui/layout";

const pinia = createPinia();
const { router } = useRouteConfig();
await useIndexDb();

createApp(App)
  .use(pinia)
  .use(router)
  .component("base-layout", CLayout)
  .component("base-tabs", CTabs)
  .component("icon", Icon)
  .component("type-button", TypeButton)
  .mount("#app");

// import "./modules/character/character.model";

import "./config.css";
import "uno.css";
import "@hansuhhi-don/csss/dist/style.css";

import { createApp } from "vue";
import App from "./App";
import createCsssUI from "csss-ui";
import { createPinia } from "pinia";

createApp(App).use(createCsssUI()).use(createPinia()).mount("#app");

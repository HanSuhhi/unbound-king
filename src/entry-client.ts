import { createApp as createVueApp } from "vue";
import { createApp } from "./main";
import App from "./App.vue";

const app = createVueApp(App);
const { router } = createApp(app);

// wait until router is ready before mounting to ensure hydration match
void router.isReady().then(() => {
  app.mount("#app");
});

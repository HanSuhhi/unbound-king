import { createApp } from "./main";

const { app, router } = createApp();

// wait until router is ready before mounting to ensure hydration match
void router.isReady().then(() => {
  app.mount("#app");
});

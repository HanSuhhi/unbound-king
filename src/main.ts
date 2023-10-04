import type { App as VueApp } from "vue";
import { createPinia } from "pinia";
import { useRouteConfig } from "./composables/ci/router";
import Icon from "./components/Icon.vue";
import TypeButton from "./components/typeButton/TypeButton.vue";
import CTabs from "./components/ui/tabs";
import CLayout from "./components/ui/layout";
import { usePaperRipple } from "./directives/paperRipple";

import "uno.css";
import "./styles/index.css";
import { i18n } from "@/locals";

if (import.meta.env.SSR && import.meta.env.DEV && !global.fetch) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  global.fetch = (await import("node-fetch")).default;
}

export function createApp(app: VueApp<Element>) {
  const pinia = createPinia();
  const { router } = useRouteConfig();
  const { paperRipple } = usePaperRipple();

  app.use(pinia)
    .use(router)
    .use(i18n)
    .component("base-layout", CLayout)
    .component("base-tabs", CTabs)
    .component("icon", Icon)
    .component("type-button", TypeButton)
    .directive("paperRipple", paperRipple);

  return { router };
}

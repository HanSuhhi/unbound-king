import type { App as VueApp } from "vue";
import { createPinia } from "pinia";
import { VueQueryPlugin } from "vue-query";
import { useRouteConfig } from "./composables/router/router";
import Icon from "./components/Icon.vue";
import TypeButton from "./components/typeButton/TypeButton.vue";
import CTabs from "./components/ui/tabs";
import CLayout from "./components/ui/layout";
import { usePaperRipple } from "./directives/paperRipple";
import { defineI18n } from "./locals/index";

import "uno.css";
import "./styles/index.css";

if (import.meta.env.SSR && !global.fetch) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  global.fetch = (await import("node-fetch")).default;
}

export function createApp(app: VueApp<Element>) {
  const pinia = createPinia();
  const i18n = defineI18n();
  const { router } = useRouteConfig();
  const { paperRipple } = usePaperRipple();

  app.use(pinia)
    .use(router)
    .use(i18n)
    .use(VueQueryPlugin)
    .component("base-layout", CLayout)
    .component("base-tabs", CTabs)
    .component("icon", Icon)
    .component("type-button", TypeButton)
    .directive("paperRipple", paperRipple);

  return { router };
}

import type { App } from "vue";
import CTabs from "./CTabs";

CTabs.install = (app: App) => {
  app.component(CTabs.name, CTabs);
};

export { CTabs };
export default CTabs;
export { useCsssTabs } from "./composables/csssTabs";

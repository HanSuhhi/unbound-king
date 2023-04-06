import type { App } from "vue";
import CLayout from "./CLayout";

CLayout.install = (app: App) => {
  app.component(CLayout.name, CLayout);
};

export { CLayout };
export default CLayout;
export { useCsssLayout } from "./composables/csssLayout";

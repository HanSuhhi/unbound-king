import { defineComponent, ref } from "vue";
import "./app-header.css";
import RouterHistory from "./components/SystemInfo";
import AsideModules from "./components/AsideModules.vue";
import { defineRouterChange } from "@/composables/experience/loadingbar";

export const routes = ref<[router: string, icon: BaseIconName][]>([]);

export default defineComponent({
  name: "AppHeader",
  setup: () => {
    defineRouterChange();
    return () => {
      return (
        <div class="app-header_box">
          <RouterHistory />
          <AsideModules />
        </div>
      );
    };
  }
});

import { defineComponent, ref } from "vue";
import SystemInfo from "./components/SystemInfo";
import Modules from "./components/Modules.vue";
import { defineRouterChange } from "@/composables/experience/loadingbar";
import "./app-header.css";

export const routes = ref<[path: string, router: string, icon: BaseIconName][]>([]);

export default defineComponent({
  name: "AppHeader",
  setup: () => {
    defineRouterChange();
    return () => {
      return (
        <div class="app-header_box">
          <SystemInfo />
          <Modules />
        </div>
      );
    };
  }
});

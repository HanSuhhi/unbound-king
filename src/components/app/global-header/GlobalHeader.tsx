import { defineComponent, ref } from "vue";
import SystemInfo from "./components/SystemInfo";
import Modules from "./components/Modules.vue";
import { defineRouterChange } from "@/composables/experience/loadingbar";
import "./global-header.css";

export const routes = ref<[path: string, router: string, icon: BaseIconName][]>([]);

export default defineComponent({
  name: "GlobalHeader",
  setup: () => {
    defineRouterChange();
    return () => {
      return (
        <div class="global-header">
          <SystemInfo />
          <Modules />
        </div>
      );
    };
  }
});

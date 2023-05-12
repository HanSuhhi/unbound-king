import { defineComponent, ref } from "vue";
import RouterHistory from "./components/SystemInfo";
import BasePreference from "./components/BasePreference.vue";
import { defineRouterChange } from "@/composables/experience/loadingbar";
import "./app-header.css";

export const routes = ref <[path: string, router: string, icon: BaseIconName][]>([]);

export default defineComponent({
  name: "AppHeader",
  setup: () => {
    defineRouterChange();
    return () => {
      return (
        <div class="app-header_box">
          <RouterHistory />
          <BasePreference />
        </div>
      );
    };
  }
});

import { defineComponent, ref } from "vue";
import "./app-header.css";
import RouterHistory from "./components/SystemInfo";
import BasePreference from "./components/BasePreference.vue";
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
          <BasePreference />
        </div>
      );
    };
  }
});

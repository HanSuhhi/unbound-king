import { computed, defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import { CLIENT_SECOND_PREFIX } from "../../../../composables/constant/url";
import SystemInfo from "./components/SystemInfo";
import Modules from "./components/Modules.vue";
import { defineRouterChange } from "@/composables/experience/loadingbar";

import "./global-header.css";

export const routes = ref<[path: string, router: string, icon: BaseIconName][]>([]);

export default defineComponent({
  name: "GlobalHeader",
  setup: () => {
    defineRouterChange();

    const route = useRoute();
    const isContent = computed(() => route.fullPath.includes(CLIENT_SECOND_PREFIX));
    return () => {
      return (
        <div class={{ "global-header": true, "global-header_is-content": isContent.value }}>
          <SystemInfo />
          <Modules />
        </div>
      );
    };
  }
});

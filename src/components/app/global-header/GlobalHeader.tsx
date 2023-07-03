import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";
import SystemInfo from "./components/SystemInfo";
import Modules from "./components/Modules.vue";
import { Prefix } from "#/composables/constant/url";
import { defineRouterChange } from "@/composables/experience/loadingbar";

import "./global-header.css";

export default defineComponent({
  name: "GlobalHeader",
  setup: () => {
    defineRouterChange();

    const route = useRoute();
    const isContent = computed(() => route.fullPath.includes(Prefix.Client_Dev));
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

import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import SystemInfo from "./components/SystemInfo";
import Modules from "./components/Modules.vue";
import { Prefix } from "#/composables/constant/url";
import { defineRouterChange } from "@/composables/experience/loadingbar";

import { useStateStore } from "@/stores/state.store";
import "./global-header.css";

export default defineComponent({
  name: "GlobalHeader",
  setup: () => {
    defineRouterChange();
    const { isInMainGameState } = storeToRefs(useStateStore());

    const route = useRoute();
    const isContent = computed(() => route.fullPath.includes(Prefix.Client_Dev));

    return () => {
      return (
        <div class={{ "global-header": true, "global-header_is-content": isContent.value }} style={{ display: isInMainGameState.value ? "none" : "inherit" }}>
          <SystemInfo />
          <Modules />
        </div>
      );
    };
  }
});

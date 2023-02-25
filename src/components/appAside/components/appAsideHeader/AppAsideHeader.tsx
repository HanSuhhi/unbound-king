import { useAppAsideStore } from "@/components/appAside/store/aside.store";
import Extend from "@/components/Extend.vue";
import { throttle } from "lodash-es";
import { storeToRefs } from "pinia";
import { defineComponent, Transition } from "vue";
import "./app-aside-header.css";

export default defineComponent({
  name: "AppAsideHeader",
  setup: (props) => {
    const { asideCollapsed } = storeToRefs(useAppAsideStore());
    const toggle = throttle(() => (asideCollapsed.value = !asideCollapsed.value), 400);
    return () => {
      return (
        <header class="app-aside-header">
          <Transition name="fade" mode="out-in">
            <span v-show={!asideCollapsed.value} class="app-aside-header_title">
              {import.meta.env.PROJECT_NAME}
            </span>
          </Transition>

          <Extend data-reverse={asideCollapsed.value ? "" : null} class="app-aside-header_icon" onClick={toggle} />
        </header>
      );
    };
  },
});

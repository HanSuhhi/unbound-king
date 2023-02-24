import "./app-aside-header.css";
import { defineComponent, Transition } from "vue";
import Extend from "./components/Extend.vue";
import { storeToRefs } from "pinia";
import { useAppAsideStore } from "@/components/appAside/store/aside.store";
import { debounce, throttle } from "lodash-es";

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

          <Extend data-collapsed={asideCollapsed.value ? "" : null} class="app-aside-header_icon" onClick={toggle} />
        </header>
      );
    };
  },
});

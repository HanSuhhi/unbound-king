import { storeToRefs } from "pinia";
import { computed, defineComponent } from "vue";
import "./app-aside.css";
import AppAsideModule from "./components/AppAsideModule";
import { useAsideLayout } from "./composables/layout";
import { useAppAsideStore } from "./store/aside.store";
import BaseMenu from "./components/baseMenu/BaseMenu.vue";

export default defineComponent({
  name: "AppAside",
  setup: (props) => {
    const { COMP } = useAsideLayout();
    const { activeModules } = storeToRefs(useAppAsideStore());

    const lists = computed(() => activeModules.value.map((module) => <AppAsideModule icon={module.icon!}></AppAsideModule>));

    const panels = computed(() => {
      const _panels: Record<string, () => JSX.Element> = {};
      activeModules.value.forEach((module, index) => {
        switch (module.type) {
          default:
          case "default-menu":
            _panels[`panel-${index}`] = () => <BaseMenu />;
            break;
        }
      });
      return _panels;
    });

    return () => {
      return (
        <c-tabs ref={COMP}>
          {{
            list: () => lists.value,
            ...panels.value,
          }}
        </c-tabs>
      );
    };
  },
});

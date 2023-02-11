import { defineComponent, computed } from "vue";
import "./app-aside.css";
import AppAsideModule from "./components/AppAsideModule";
import { useAsideLayout } from "./composables/layout";
import { useAppAsideStore } from "./store/aside.store";
import { toArray, range } from "lodash-es";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "AppAside",
  setup: (props) => {
    const { COMP } = useAsideLayout();
    const { activeMenus } = storeToRefs(useAppAsideStore());

    const lists = computed(() => activeMenus.value.map((menu) => <AppAsideModule icon={menu.icon!}></AppAsideModule>));

    const panels = computed(() => {
      const _panels: Record<string, () => JSX.Element> = {};
      activeMenus.value.forEach((menu, index) => {
        _panels[`panel-${index}`] = () => <menu.comp></menu.comp>;
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

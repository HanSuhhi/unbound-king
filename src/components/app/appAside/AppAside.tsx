import { storeToRefs } from "pinia";
import type { ComputedRef } from "vue";
import { computed, defineAsyncComponent, defineComponent } from "vue";
import AppAsideModule from "./components/AppAsideModule";
import BaseMenu from "./components/baseMenu/BaseMenu.vue";
import Workshop from "./components/workshop/Workshop.vue";
import { useAsideLayout } from "./composables/layout";
import { useAppAsideStore } from "./store/aside.store";
import AsideSetting from "./components/AsideSetting.vue";
import "./app-aside.css";

export default defineComponent({
  name: "AppAside",
  setup: () => {
    const { COMP } = useAsideLayout();
    const { activeModules } = storeToRefs(useAppAsideStore());

    const lists = computed(() => ({ active }: Dictionary<ComputedRef<number>>) => {
      return activeModules.value.map((module, index) => <AppAsideModule isActive={index === active.value} module={module} />);
    });

    const panels = computed(() => {
      const _panels: Record<string, () => JSX.Element> = {};
      activeModules.value.forEach((module, index) => {
        switch (module.type) {
          case "default-menu":
          default:
            _panels[`panel-${index}`] = () => <BaseMenu />;
            break;
        }
      });
      return _panels;
    });

    const Tabs = defineAsyncComponent(() =>
      import("@/components/ui/tabs")
    );

    return () => {
      return (
        <div class="app-aside_main">
          <Tabs ref={COMP}>
            {{
              list: lists.value,
              ...panels.value
            }}
          </Tabs>
          <Workshop />
          <AsideSetting />
        </div>
      );
    };
  }
});

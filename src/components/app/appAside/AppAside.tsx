import { storeToRefs } from "pinia";
import type { ComputedRef } from "vue";
import { computed, defineComponent } from "vue";
import AppAsideModule from "./components/AppAsideModule";
import BaseMenu from "./components/baseMenu/BaseMenu.vue";
import Workshop from "./components/workshop/Workshop.vue";
import { useAsideLayout } from "./composables/layout";
import AsideSetting from "./components/AsideSetting.vue";
import { useDevStore } from "@/stores/dev.store";
import "./app-aside.css";

export default defineComponent({
  name: "AppAside",
  setup: async () => {
    const { COMP } = await useAsideLayout();
    const { modules } = storeToRefs(useDevStore());

    const lists = computed(() => ({ active }: Dictionary<ComputedRef<number>>) => {
      return modules.value.map((module, index) => <AppAsideModule isActive={index === active.value} module={module} />);
    });

    const panels = computed(() => {
      const _panels: Record<string, () => JSX.Element> = {};
      modules.value.forEach((_, index) => _panels[`panel-${index}`] = () => <BaseMenu />);
      return _panels;
    });

    return () => {
      return (
        <div class="app-aside_main">
          <base-tabs ref={COMP}>
            {{
              list: lists.value,
              ...panels.value
            }}
          </base-tabs>
          <Workshop />
          <AsideSetting />
        </div>
      );
    };
  }
});

import { storeToRefs } from "pinia";
import { computed, defineComponent, TransitionGroup } from "vue";
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

    const lists = computed(() => activeModules.value.map((module) => <AppAsideModule icon={module.icon!} key={module.icon} />));

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
            list: () => (
              <TransitionGroup name="list" tag="div">
                <div key="1">1</div>
                <div key="2">2</div>
                <div key="3">3</div>
                <div key="4">4</div>
                {/* {lists.value} */}
              </TransitionGroup>
            ),
            ...panels.value,
          }}
        </c-tabs>
      );
    };
  },
});

import { defineComponent } from "vue";
import { defineBaseIconLayout } from "./composables/layout";
import Tips from "./components/Tips.vue";
import IconDashboard from "./components/IconDashboard.vue";

export default defineComponent({
  name: "BaseIcon",
  setup: (props) => {
    const { COMP } = defineBaseIconLayout();
    return () => {
      return (
        <c-layout ref={COMP}>
          {{
            header: () => <Tips />,
            default: () => <IconDashboard />,
          }}
        </c-layout>
      );
    };
  },
});

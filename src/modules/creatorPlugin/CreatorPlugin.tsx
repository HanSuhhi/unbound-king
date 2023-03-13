import { defineCommonLayout } from "@/composables/components/commonLayout";
import { defineComponent } from "vue";
import Dashboard from "./components/Dashboard.vue";

export default defineComponent({
  name: "CreatorPlugin",
  setup: (props) => {
    const { COMP } = defineCommonLayout("creator-plugin");
    return () => {
      return (
        <c-layout ref={COMP}>
          {{
            aside: () => <div />,
            default: () => <Dashboard />,
          }}
        </c-layout>
      );
    };
  },
});

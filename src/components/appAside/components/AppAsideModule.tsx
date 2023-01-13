import type { PropType } from "vue";
import { computed, defineComponent } from "vue";
import "../styles/app-aside-module.css";

export default defineComponent({
  name: "AppAsideModule",
  props: {
    icon: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup: (props) => {
    const classList = computed<string[]>(() => [props.icon, "app-aside-module"]);
    return () => {
      return <div class={classList.value}></div>;
    };
  },
});

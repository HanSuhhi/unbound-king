import Icon from "@/components/Icon.vue";
import type { PropType } from "vue";
import { defineComponent } from "vue";
import "./alert.css";

export default defineComponent({
  name: "AlertComponent",
  props: {
    type: {
      type: String as PropType<AlertType>,
      default: "warning",
      required: false,
    },
  },
  setup: (props, { slots }) => {
    return () => {
      return (
        <div class={["alert", `alert_${props.type}`]}>
          <Icon name={"warning"} class="alert_icon" />
          <div class="alert_words">{slots.default?.()}</div>
        </div>
      );
    };
  },
});

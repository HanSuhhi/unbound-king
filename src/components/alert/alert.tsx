import "./alert.css";
import type { PropType } from "vue";
import { defineComponent } from "vue";

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
        <div class="alert">
          <div class="i-ph-info-bold alert_icon" />
          <div class="alert_words">{slots.default?.()}</div>
        </div>
      );
    };
  },
});

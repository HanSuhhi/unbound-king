import { defineComponent } from "vue";
import "./kbd-icon.css";

export default defineComponent({
  name: "KbdIcon",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  setup: (props) => {
    return () => {
      return <kbd class="kbd-icon">{props.text}</kbd>;
    };
  },
});

import { defineComponent } from "vue";
import "./kbd-icon.css";
import { useHtmlPropLint } from "../../composables/util/htmlPropLint";

export default defineComponent({
  name: "KbdIcon",
  props: {
    text: {
      type: String,
      required: true,
    },
    reversed: {
      type: Boolean,
      required: false,
    },
  },
  setup: (props) => {
    return () => {
      return (
        <kbd class="kbd-icon" data-reversed={useHtmlPropLint(props.reversed)}>
          {props.text}
        </kbd>
      );
    };
  },
});

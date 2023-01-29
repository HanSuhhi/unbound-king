import { isArray } from "lodash-es";
import type { StyleValue } from "vue";
import { computed, defineComponent } from "vue";
import KbdIcon from "./kbdIcon/KbdIcon";

export default defineComponent({
  name: "KeyboardButton",
  props: {
    text: {
      type: [Array<string>, String],
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
  },
  setup: (props) => {
    const kbds = computed(() => {
      if (!isArray(props.text)) return [props.text];
      return props.text;
    });
    return () => {
      const style: StyleValue = {
        display: "flex",
        placeItems: "center",
      };
      const titleStyle: StyleValue = {
        marginLeft: "var(--small)",
      };
      return (
        <div class="keyboard-button" style={style}>
          {kbds.value.map((kbd) => (
            <KbdIcon text={kbd}></KbdIcon>
          ))}
          <span style={titleStyle}>{props.title}</span>
        </div>
      );
    };
  },
});

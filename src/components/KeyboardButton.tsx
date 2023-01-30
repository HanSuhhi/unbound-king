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
    showKeys: {
      type: Boolean,
      default: true,
    },
  },
  setup: (props, { slots }) => {
    const kbds = computed(() => {
      if (!isArray(props.text)) return [props.text];
      return props.text;
    });
    return () => {
      const style: StyleValue = {
        display: "flex",
        placeItems: "center",
      };
      const kbdStyle: StyleValue = {
        marginRight: "var(--mini)",
      };
      return (
        <div class="keyboard-button" style={style}>
          {kbds.value.map((kbd) => (
            <KbdIcon v-show={props.showKeys} style={kbdStyle} text={kbd}></KbdIcon>
          ))}
          <span>{slots.default?.()}</span>
        </div>
      );
    };
  },
});

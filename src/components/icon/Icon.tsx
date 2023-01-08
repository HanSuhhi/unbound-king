import "./icon.css";

import type { PropType } from "vue";
import { defineComponent, computed } from "vue";
import { isString } from "lodash-es";

export default defineComponent({
  name: "Icon",
  props: {
    icon: {
      type: String as PropType<string>,
      required: true,
    },
    size: {
      type: (String as PropType<Size>) || Number,
      required: true,
      default: "normal",
    },
  },
  setup: (props) => {
    const size = computed<number>(() => {
      if (isString(props.size)) {
        switch (props.size) {
          case "small":
            return 1;
          case "large":
            return 2;
          case "normal":
          default:
            return 1.4;
        }
      } else {
        return props.size;
      }
    });

    return () => {
      return <div style={{ "--size": size.value }} class={[props.icon, "icon"]}></div>;
    };
  },
});

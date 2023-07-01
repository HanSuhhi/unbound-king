import { UseDraggable } from "@vueuse/components";
import type { Position } from "@vueuse/core";
import type { Ref, StyleValue } from "vue";
import { computed, defineComponent, inject } from "vue";
import TitleCardCore from "./components/TitleCardCore.vue";
import "./title-card-draggable.css";

export default defineComponent({
  name: "TitleCard",
  props: {
    x: {
      type: Number,
      required: true
    },
    y: {
      type: Number,
      required: true
    },
    changeFixed: {
      type: Function,
      required: false
    }
  },
  setup: (props, { slots }) => {
    const handle = inject<Ref>("handle")!;
    const draggableBoundary = inject<Function>("boundary")!;

    const style = computed<StyleValue>(() => ({
      left: `${props.x}px`,
      top: `${props.y}px`
    }));

    return () => {
      return (
        <UseDraggable
          as="article"
          handle={handle.value}
          style={style.value}
          class={"title-card title-card_draggable"}>
          {{
            default: (position: Position) => {
              draggableBoundary(position);
              return <TitleCardCore handle={handle} changeFixed={props.changeFixed}>
                {{
                  title: () => <>{slots.title?.()}</>,
                  subtitle: () => <>{slots.subtitle?.()}</>,
                  footer: () => <>{slots.footer?.()}</>,
                  default: () => <>{slots.default?.()}</>
                }}
              </TitleCardCore>;
            }
          }}
        </UseDraggable>
      );
    };
  }
});

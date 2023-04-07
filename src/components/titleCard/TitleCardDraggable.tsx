import type { Ref, StyleValue } from 'vue';
import { computed } from 'vue';
import { defineComponent, provide, ref, inject, watch } from 'vue';
import TitleCardCore from "./components/TitleCardCore";
import { UseDraggable } from "@vueuse/components";
import "./title-card-draggable.css";
import { dialogMessage } from '../../composables/components/globalDialog';
import type { Position } from '@vueuse/core';

export default defineComponent({
  name: "TitleCard",
  props: {
    x: {
      type: Number,
    },
    y: {
      type: Number,
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
        <UseDraggable as="article" handle={handle.value} style={style.value} class="title-card title-card_draggable">
          {{
            default: (position: Position) => {
              draggableBoundary(position);
              return <TitleCardCore handle={handle}>
                {{
                  title: () => <>{slots.title?.()}</>,
                  subtitle: () => <>{slots.subtitle?.()}</>,
                  footer: () => <>{slots.footer?.()}</>,
                  default: () => <>{slots.default?.()}</>,
                }}
              </TitleCardCore>;
            }
          }}
        </UseDraggable>
      );
    };
  },
});

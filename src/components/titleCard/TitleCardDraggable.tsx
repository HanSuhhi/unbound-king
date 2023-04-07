import "./title-card.css";
import type { StyleValue } from "vue";
import { defineComponent, ref, onMounted } from "vue";
import { UseDraggable } from "@vueuse/components";
import type { Position } from "@vueuse/core";
import { throttle, forEach } from "lodash-es";
import { dialogMessage } from "../../composables/components/globalDialog";

const style: StyleValue = {};
const preventOutOfRange = throttle(({ x: elementLeft, y: elementTop }: Position) => {
  const setComponentPosition = () => {
    style.left = elementLeft + "px";
    style.top = elementTop + "px";
  };
  setComponentPosition();
  const toContainer = document.querySelector(dialogMessage.value?.toSelecter || "body")!.getBoundingClientRect();
  const limits = {
    topLimit: () => {
      const overTheTop = elementTop < toContainer.top;
      if (overTheTop) {
        style.top = toContainer.top;
      }
    },
    bottomLimit: () => {
      const beyondTheBottom = elementTop > toContainer.bottom;
      if (beyondTheBottom) {
        style.top = toContainer.bottom + "px";
      }
    },
    leftLimit: () => {
      const beyondTheLeft = elementLeft < toContainer.left;
      if (beyondTheLeft) style.left = toContainer.left;
    },
    rightLimit: () => {
      const beyondTheRight = elementLeft > toContainer.right;
      if (beyondTheRight) style.left = toContainer.right;
    },
  };

  forEach(limits, (limit) => limit());
}, 13);

export default defineComponent({
  name: "TitleCard",
  props: {
    draggable: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  setup: (props, { slots }) => {
    return () => {
      const titleCardMain: JSX.Element = (
        <>
          <header ref={handle} class="title-card_header">
            <p class="title-card_title p-reset">{slots.title?.()}</p>
            <p class="title-card_subtitle p-reset">{slots.subtitle?.()}</p>
          </header>
          <section class="title-card_main">{slots.default?.()}</section>
          {slots.footer && <section class="title-card_footer">{slots.footer?.()}</section>}{" "}
        </>
      );

      return (
        <>
          {props.draggable ? (
            <UseDraggable as="article" handle={handle.value} class="title-card">
              {{
                default: (position: Position) => {
                  preventOutOfRange(position);
                  return { titleCardMain };
                },
              }}
            </UseDraggable>
          ) : (
            <></>
          )}
        </>
      );
    };
  },
});

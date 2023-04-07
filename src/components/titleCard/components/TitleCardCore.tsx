import type { PropType, Ref } from "vue";
import { defineComponent, inject, ref } from "vue";
import "./title-card-core.css";

export default defineComponent({
  name: "TitleCardCore",
  props: {
    handle: {
      type: Object as PropType<Ref>,
      required: false,
    },
  },
  setup: (props, { slots }) => {
    return () => {
      return (
        <>
          <header ref={props?.handle || undefined} class="title-card_header">
            <p class="title-card_title p-reset">{slots.title?.()}</p>
            <p class="title-card_subtitle p-reset">{slots.subtitle?.()}</p>
          </header>
          <section class="title-card_main">{slots.default?.()}</section>
          {slots.footer?.() ? <section class="title-card_footer">{slots.footer?.()}</section> : null}
        </>
      );
    };
  },
});

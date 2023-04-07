import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "TitleCardCore",
  setup: (props, { slots }) => {
    return () => {
      const handle = ref();

      return (
        <article class="title-card">
          {slots.header && (
            <header ref={handle} class="title-card_header">
              {slots.header?.()}
            </header>
          )}
          <section class="title-card_main">{slots.default?.()}</section>
          {slots.footer && <section class="title-card_footer">{slots.footer?.()}</section>}
        </article>
      );
    };
  },
});

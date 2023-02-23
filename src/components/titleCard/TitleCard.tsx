import "./title-card.css";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TitleCard",
  setup: (props, { slots }) => {
    return () => {
      return (
        <article class="title-card">
          <header class="title-card_header">
            <p class="title-card_title">{slots.title?.()}</p>
            <p class="title-card_subtitle">{slots.subtitle?.()}</p>
          </header>
          <section class="title-card_main">{slots.default?.()}</section>
        </article>
      );
    };
  },
});

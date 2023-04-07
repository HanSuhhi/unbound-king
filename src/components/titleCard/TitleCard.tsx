import { defineComponent } from "vue";
import TitleCardCore from "./components/TitleCardCore.vue";
import "./title-card.css";

export default defineComponent({
  name: "TitleCard",
  setup: (props, { slots }) => {
    const container = slots.footer
      ? {
        title: () => <>{slots.title?.()}</>,
        subtitle: () => <>{slots.subtitle?.()}</>,
        footer: () => <>{slots.footer?.()}</>,
        default: () => <>{slots.default?.()}</>,
      }
      : {
        title: () => <>{slots.title?.()}</>,
        subtitle: () => <>{slots.subtitle?.()}</>,
        default: () => <>{slots.default?.()}</>,
      };

    return () => {
      return (
        <article class="title-card">
          <TitleCardCore>{container}</TitleCardCore>
        </article>
      );
    };
  },
});

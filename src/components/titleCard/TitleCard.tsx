import { forEach } from "lodash-es";
import { defineComponent } from "vue";
import TitleCardCore from "./components/TitleCardCore.vue";
import "./title-card.css";

export default defineComponent({
  name: "TitleCard",
  setup: (props, { slots }) => {
    const injectSlots: Dictionary<() => JSX.Element> = {};
    forEach(slots, (slot, slotName) => {
      injectSlots[slotName] = () => <>{slot?.()}</>;
    });

    return () => {
      return (
        <article class="title-card">
          <TitleCardCore>{injectSlots}</TitleCardCore>
        </article>
      );
    };
  },
});

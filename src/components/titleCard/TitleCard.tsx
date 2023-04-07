import "./title-card.css";
import type { StyleValue } from "vue";
import { defineComponent, ref, onMounted } from "vue";
import { UseDraggable } from "@vueuse/components";
import type { Position } from "@vueuse/core";
import { throttle, forEach } from "lodash-es";
import { dialogMessage } from "../../composables/components/globalDialog";
import TitleCardCore from "./components/TitleCardCore";

export default defineComponent({
  name: "TitleCard",

  setup: (props, { slots }) => {
    return () => {
      return (
        <TitleCardCore>
          {{
            header: () => (
              <>
                <p class="title-card_title p-reset">{slots.title?.()}</p>
                <p class="title-card_subtitle p-reset">{slots.subtitle?.()}</p>
              </>
            ),
            footer: () => <>{slots.footer?.()}</>,
            default: () => <>{slots.default?.()}</>,
          }}
        </TitleCardCore>
      );
    };
  },
});

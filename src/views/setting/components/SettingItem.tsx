import type { PropType } from "vue";
import { defineComponent } from "vue";
import SettingSwitch from "./sub/SettingSwitch.vue";
import { storeToRefs } from "pinia";
import { usePlayerStore } from "@/stores/player.store";

export default defineComponent({
  name: "SettingItem",
  props: {
    item: {
      required: true,
      type: Object as PropType<SettingModuleItem>,
    },
  },
  setup: (props) => {
    const { states } = storeToRefs(usePlayerStore());
    return () => {
      return (
        <div class="setting-item">
          <span class="setting-item_title">{props.item.title}</span>
          {props.item.type === "switch" && <SettingSwitch switch={props.item.switch} default={props.item.switch?.default} />}
        </div>
      );
    };
  },
});

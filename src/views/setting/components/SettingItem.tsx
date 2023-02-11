import type { PropType } from "vue";
import { defineComponent } from "vue";
import SettingSwitch from "./sub/SettingSwitch.vue";

export default defineComponent({
  name: "SettingItem",
  props: {
    item: {
      required: true,
      type: Object as PropType<SettingModuleItem>,
    },
  },
  setup: (props) => {
    return () => {
      return (
        <div class="setting-item">
          <span class="setting-item_title">{props.item.title}</span>
          {props.item.type === "switch" && <SettingSwitch prop={props.item?.prop} />}
        </div>
      );
    };
  },
});

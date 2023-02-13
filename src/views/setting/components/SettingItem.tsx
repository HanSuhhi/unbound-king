import type { PropType } from "vue";
import { defineComponent, computed } from "vue";
import SettingSwitch from "./sub/SettingSwitch.vue";
import { storeToRefs } from "pinia";
import { useSettingStore } from "@/views/setting/store/setting.store";

export default defineComponent({
  name: "SettingItem",
  props: {
    item: {
      required: true,
      type: Object as PropType<SettingModuleItem>,
    },
  },
  setup: (props) => {
    const { activeItem } = storeToRefs(useSettingStore());
    const isChoosed = computed(() => activeItem.value === props.item.index);

    return () => {
      return (
        <div class="setting-item" data-choosed={isChoosed.value ? "" : null}>
          <span class="setting-item_title">{props.item.title}</span>
          {props.item.type === "switch" && <SettingSwitch switch={props.item.switch} index={props.item.index} />}
        </div>
      );
    };
  },
});

import KeyboardButton from "@/components/KeyboardButton";
import { useSettingStore } from "@/stores/setting.store";
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import { useSettingHeader } from "../composables/settingHeader";

export default defineComponent({
  name: "SettingFooter",
  setup: (props) => {
    const { list } = storeToRefs(useSettingStore());
    const { active } = useSettingHeader();

    return () => {
      return (
        <artical class="setting-footer">
          <section class="setting-footer_part"></section>
          <section class="setting-footer_part">
            <KeyboardButton class="setting-footer_key" title="重置" text={["ctrl", "r"]} />
            <KeyboardButton class="setting-footer_key" title="取消" text="esc" />
            <KeyboardButton class="setting-footer_key" title="应用" text="enter" />
          </section>
        </artical>
      );
    };
  },
});

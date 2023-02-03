import KeyboardButton from "@/components/KeyboardButton";
import { useSettingStore } from "@/stores/setting.store";
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import { useSettingHeader } from "../composables/settingHeader";

export default defineComponent({
  name: "SettingHeader",
  setup: (props) => {
    const { list } = storeToRefs(useSettingStore());
    const { active } = useSettingHeader();

    return () => {
      return (
        <article class="setting-header">
          {list.value.map((sm, index) => (
            <KeyboardButton title={sm.title} text={`S + ${index + 1}`} onClick={() => (active.value = index)} data-active={active.value === index ? "" : null} class="setting-header-item">
              {sm.title}
            </KeyboardButton>
          ))}
        </article>
      );
    };
  },
});

import KeyboardButton from "@/components/KeyboardButton";
import { useSettingStore } from "@/views/setting/store/setting.store";
import { storeToRefs } from "pinia";
import { defineComponent, computed } from "vue";

const keyboardText = (index: number): string => `S + ${index + 1}`;

export default defineComponent({
  name: "SettingHeader",
  setup: (props) => {
    const { list, active } = storeToRefs(useSettingStore());
    const isActive = (index: number) => (active.value === index ? "" : null);

    return () => {
      return (
        <article class="setting-header">
          {list.value.map((sm, index) => (
            <KeyboardButton title={sm.title} text={keyboardText(index)} onClick={() => (active.value = index)} data-active={isActive(index)} class="setting-header-item">
              {sm.title}
            </KeyboardButton>
          ))}
        </article>
      );
    };
  },
});

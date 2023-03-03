import KeyboardButton from "@/components/KeyboardButton";
import { useSettingStore } from "@/modules/setting/store/setting.store";
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";

const keyboardText = (index: number): string => `S + ${index + 1}`;

export default defineComponent({
  name: "SettingHeader",
  setup: (props) => {
    const { list, activeModule } = storeToRefs(useSettingStore());
    const isActive = (index: number) => (activeModule.value === index ? "" : null);

    return () => {
      return (
        <article class="setting-header">
          {list.value.map((sm, index) => (
            <KeyboardButton title={sm.title} text={keyboardText(index)} onClick={() => (activeModule.value = index)} data-active={isActive(index)} class="setting-header-item">
              {sm.title}
            </KeyboardButton>
          ))}
        </article>
      );
    };
  },
});

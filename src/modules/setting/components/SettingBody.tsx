import { useSettingStore } from "@/modules/setting/store/setting.store";
import { storeToRefs } from "pinia";
import { defineComponent, computed, onMounted, onUnmounted } from "vue";
import { globalSettingConfig } from "../data/globalSettingConfig";
import GlobalSetting from "./GlobalSetting";
import { useKeyStore } from "@/stores/key.store";
import { isEqual } from "lodash-es";

const settings = [globalSettingConfig];
const calcLength = (settings: SettingModule[]): number => {
  let length = 0;
  settings.forEach((module) => {
    length += module.items.length;
  });
  return length;
};

export default defineComponent({
  name: "SettingBody",
  setup: (props) => {
    const { activeModule, activeItem } = storeToRefs(useSettingStore());
    const { uninstallKeyCommand, addKeyCommand } = useKeyStore();
    const length = computed(calcLength.bind(this, settings[activeModule.value].value));

    let lastKeysLength: number = 0;
    const KEY_ItemControl: KeyCommand = {
      key: "_tab_shift",
      fn: (keys: string[]) => {
        const lastItem = isEqual(keys, ["tab"]) && lastKeysLength === 0;
        if (lastItem) {
          const toStartPosition = --activeItem.value < 0;
          if (toStartPosition) activeItem.value = 0;
        }
        const nextItem = isEqual(keys, ["shift", "tab"]);
        if (nextItem) {
          const toEndPosition = ++activeItem.value === length.value;
          if (toEndPosition) activeItem.value--;
        }
        lastKeysLength = keys.length;
      },
    };

    onMounted(addKeyCommand.bind(this, KEY_ItemControl));
    onUnmounted(uninstallKeyCommand.bind(this, KEY_ItemControl.key));

    return () => {
      return <article class="setting-body">{activeModule.value === 0 && <GlobalSetting />}</article>;
    };
  },
});

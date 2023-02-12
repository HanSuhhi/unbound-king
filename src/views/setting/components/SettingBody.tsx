import { useSettingStore } from "@/views/setting/store/setting.store";
import { storeToRefs } from "pinia";
import { defineComponent, Transition } from "vue";
import GlobalSetting from "./GlobalSetting";

export default defineComponent({
  name: "SettingBody",
  setup: (props) => {
    const { active } = storeToRefs(useSettingStore());

    return () => {
      return (
        <Transition name="fade">
          <article class="setting-body">{active.value === 0 && <GlobalSetting />}</article>
        </Transition>
      );
    };
  },
});

import { useSettingStore } from "@/views/setting/store/setting.store";
import { defineComponent, Transition, computed } from "vue";
import { storeToRefs } from "pinia";
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

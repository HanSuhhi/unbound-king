import { useSettingStore } from "@/views/setting/store/setting.store";
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import GlobalSetting from "./GlobalSetting";

export default defineComponent({
  name: "SettingBody",
  setup: (props) => {
    const { active } = storeToRefs(useSettingStore());

    return () => {
      return <article class="setting-body">{active.value === 0 && <GlobalSetting />}</article>;
    };
  },
});

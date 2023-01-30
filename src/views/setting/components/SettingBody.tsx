import { useSettingStore } from "@/stores/setting.store";
import { defineComponent, Transition } from "vue";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "SettingBody",
  setup: (props) => {
    return () => {
      return (
        <Transition name="fade">
          <article class="setting-body"></article>
        </Transition>
      );
    };
  },
});

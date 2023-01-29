import { useSettingStore } from "@/stores/setting.store";
import { defineComponent, Transition } from "vue";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "SettingBody",
  setup: (props) => {
    const { settingActive } = storeToRefs(useSettingStore());

    return () => {
      return (
        <Transition name="fade">
          <article class="setting-body">
            <c-button v-show={settingActive.value} onClick={() => (settingActive.value = false)}>
              close
            </c-button>
          </article>
        </Transition>
      );
    };
  },
});

import { useSettingStore } from "@/stores/setting.store";
import { useCsssLayout } from "csss-ui";
import { storeToRefs } from "pinia";
import { defineComponent, Teleport, Transition } from "vue";
import SettingBody from "./components/SettingBody";
import SettingFooter from "./components/SettingFooter.vue";
import SettingHeader from "./components/SettingHeader";
import { useSetting } from "./composables/setting";
import "./setting.css";

export default defineComponent({
  name: "Setting",
  setup: (props) => {
    const { COMP } = useSetting();
    const { settingActive } = storeToRefs(useSettingStore());

    return () => {
      return (
        <Teleport to="body">
          <Transition name="fade">
            <c-layout v-show={settingActive.value} class="setting" ref={COMP}>
              {{
                header: () => <Transition name="slide-down">{settingActive.value && <SettingHeader />}</Transition>,
                default: () => <Transition name="fade">{settingActive.value && <SettingBody />}</Transition>,
                footer: () => <Transition name="slide-up">{settingActive.value && <SettingFooter />}</Transition>,
              }}
            </c-layout>
          </Transition>
        </Teleport>
      );
    };
  },
});

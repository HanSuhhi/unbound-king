import { useSettingStore } from "@/stores/setting.store";
import { useCsssLayout } from "csss-ui";
import { storeToRefs } from "pinia";
import { defineComponent, Teleport, Transition } from "vue";
import SettingBody from "./components/SettingBody";
import SettingFooter from "./components/SettingFooter";
import SettingHeader from "./components/SettingHeader";
import { useSetting } from "./composables/setting";
import "./setting.css";

export default defineComponent({
  name: "Setting",
  setup: (props) => {
    const {} = useSetting();
    const { settingActive } = storeToRefs(useSettingStore());
    const { COMP } = useCsssLayout({
      style: {
        footerHeightSize: "large",
        classList: {
          main: ["", "setting-main"],
        },
        property: {
          "--header-height": "calc(var(--font-normal) + var(--large) * 2)",
        },
      },
    });

    return () => {
      return (
        <Teleport to="body">
          {
            <c-layout class="setting" ref={COMP}>
              {{
                header: () => <Transition name="slide-down">{settingActive.value && <SettingHeader />}</Transition>,
                default: () => <Transition name="fade">{settingActive.value && <SettingBody />}</Transition>,
                footer: () => <Transition name="slide-up">{settingActive.value && <SettingFooter />}</Transition>,
              }}
            </c-layout>
          }
        </Teleport>
      );
    };
  },
});

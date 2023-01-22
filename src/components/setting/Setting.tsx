import { useGlobalStore } from "@/stores/global.store";
import { storeToRefs } from "pinia";
import { defineComponent, ref, unref } from "vue";
import "./setting.css";
import { useSetting } from "./composables/setting";
import { SettingItemType } from "./enums/setting.enum";
import { useSettingStore } from "@/stores/setting.store";
import { useCsssLayout } from "csss-ui";

export default defineComponent({
  name: "settingA",
  setup: (props) => {
    const { Drawer } = storeToRefs(useGlobalStore());
    const { settingModules, devMode } = storeToRefs(useSettingStore());
    setTimeout(() => {
      devMode.value = true;
    }, 3000);

    return () => {
      return (
        <c-drawer ref={Drawer}>
          {settingModules.value.map((module) => (
            <div class="setting-module">
              <span class="setting-module_title">{module.title}</span>
              <hr class="setting-module_hr" />
              {module["items"].map(({ items, name, type, comp }) => {
                const { COMP } = useCsssLayout({
                  style: {
                    asideWidthSize: "small",
                    classList: {
                      aside: ["", "setting-module-item_aside"],
                      main: ["", "setting-module-item_main"],
                    },
                  },
                });
                return (
                  <c-layout ref={COMP} class="setting-module-item">
                    {{
                      default: () => {
                        switch (type) {
                          case SettingItemType.Radio:
                            return (
                              <c-radio ref={comp()} class="setting-radio">
                                {items!.map((v, i) => (
                                  <span class="setting-radio_block">{v}</span>
                                ))}
                              </c-radio>
                            );
                          default:
                            break;
                        }
                      },
                      aside: () => <span>{name}</span>,
                    }}
                  </c-layout>
                );
              })}
            </div>
          ))}
        </c-drawer>
      );
    };
  },
});

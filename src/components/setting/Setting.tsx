import { useGlobalStore } from "@/stores/global.store";
import { useSettingStore } from "@/stores/setting.store";
import { useCsssLayout } from "csss-ui";
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import { SettingItemType } from "./enums/setting.enum";
import "./setting.css";

export default defineComponent({
  name: "settingA",
  setup: (props) => {
    const { Drawer } = storeToRefs(useGlobalStore());
    const { settingModules } = storeToRefs(useSettingStore());

    return () => {
      return (
        <c-drawer ref={Drawer}>
          {settingModules.value.map(({ title, auth, items, password }) => {
            return (
              (auth ? auth.effective : true) && (
                <div class="setting-module">
                  <div class="setting-module_title">
                    <span>{title}</span>
                  </div>
                  <hr class="setting-module_hr" />
                  {items.map(({ items, name, type, comp }) => {
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
              )
            );
          })}
        </c-drawer>
      );
    };
  },
});

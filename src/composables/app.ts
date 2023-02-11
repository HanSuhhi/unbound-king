import { useKeyStore } from "@/stores/key.store";
import { useSettingStore } from "@/views/setting/store/setting.store";
import { useCsssLayout } from "csss-ui";
import { storeToRefs } from "pinia";

export const useApp = () => {
  const { COMP: Layout } = useCsssLayout({
    state: {
      layoutType: "aside",
    },
    style: {
      asideWidthSize: "large",
      classList: {
        layout: ["", "app"],
        header: ["", "app-header"],
        main: ["", "app-main"],
        aside: ["", "app-aside"],
      },
    },
  });

  /**
   * @description keys
   */
  const { addKeyCommand } = useKeyStore();
  const { settingPageActive } = storeToRefs(useSettingStore());

  addKeyCommand({
    key: "escape",
    fn: (isPressed: boolean) => {
      if (!isPressed) settingPageActive.value = !settingPageActive.value;
    },
  });

  return { Layout };
};

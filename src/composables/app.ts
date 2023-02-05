import { useKeyStore } from "@/stores/key.store";
import { useSettingStore } from "@/stores/setting.store";
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
  const { settingActive } = storeToRefs(useSettingStore());

  addKeyCommand({
    key: "escape",
    fn: (isPressed: boolean) => {
      if (!isPressed) settingActive.value = !settingActive.value;
    },
  });

  return { Layout };
};

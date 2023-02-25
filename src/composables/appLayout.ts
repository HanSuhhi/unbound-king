import { useKeyStore } from "@/stores/key.store";
import { useSettingStore } from "@/views/setting/store/setting.store";
import { useCsssLayout } from "csss-ui";
import { storeToRefs } from "pinia";
import { useAppAsideStore } from "@/components/appAside/store/aside.store";
import { watch } from "vue";

export const defineAppLayout = () => {
  const { asideCollapsed } = storeToRefs(useAppAsideStore());

  const { COMP: Layout, style } = useCsssLayout({
    state: {
      layoutType: "aside",
    },
    style: {
      classList: {
        layout: [""],
        header: ["", "app-header"],
        main: ["", "app-main"],
        aside: ["", "app-aside"],
      },
      property: {
        "--aside-width": import.meta.env.ASIDE_WIDTH,
      },
    },
  });

  watch(asideCollapsed, (isCollapsed) => {
    const element = document.getElementsByClassName("app")[0];

    if (isCollapsed) {
      style.value.property["--aside-width"] = "5rem";
    } else {
      style.value.property["--aside-width"] = import.meta.env.ASIDE_WIDTH;
    }
  });

  setTimeout(() => {}, 2000);

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

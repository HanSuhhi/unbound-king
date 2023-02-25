import { useKeyStore } from "@/stores/key.store";
import { useSettingStore } from "@/views/setting/store/setting.store";
import { useCsssLayout } from "csss-ui";
import { storeToRefs } from "pinia";
import { useAppAsideStore } from "@/components/appAside/store/aside.store";
import { watch, nextTick } from "vue";
import { defer } from "lodash-es";

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
    style.value.property["--aside-width"] = isCollapsed ? "5rem" : import.meta.env.ASIDE_WIDTH;
  });

  const setMainBlockHeight = () => {
    const mainElement = document.getElementsByClassName("app-main")[0] as HTMLElement;
    const headerElement = document.getElementsByClassName("app-header")[0] as HTMLElement;
    mainElement.style.height = `100% - ${headerElement.clientHeight}px`;
  };
  defer(setMainBlockHeight);

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

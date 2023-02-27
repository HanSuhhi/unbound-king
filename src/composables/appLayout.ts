import { useKeyStore } from "@/stores/key.store";
import { useSettingStore } from "@/views/setting/store/setting.store";
import { useCsssLayout } from "csss-ui";
import { storeToRefs } from "pinia";
import { useAppAsideStore } from "@/components/appAside/store/aside.store";
import { watch, nextTick } from "vue";
import { defer } from "lodash-es";

export const defineAppLayout = () => {
  const { COMP: Layout, style } = useCsssLayout({
    state: {
      layoutType: "header-aside",
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
        "--header-height": "2.5rem",
      },
    },
  });

  const setLayoutProps = () => {
    const appElement = document.getElementsByClassName("app")[0] as HTMLElement;
    const headerElement = document.getElementsByClassName("app-header")[0] as HTMLElement;
    const mainElement = document.getElementsByClassName("app-main")[0] as HTMLElement;
    const modulesELement = document.getElementsByClassName("app-aside_list")[0] as HTMLElement;
    const historyElement = document.getElementsByClassName("router-history")[0] as HTMLElement;

    const mainHeight = `calc(${window.innerHeight}px - ${headerElement.clientHeight}px)`;
    mainElement.style.height = `calc(${mainHeight})`;
    appElement.style.setProperty("--header-height", `${headerElement.clientHeight}px`);
    appElement.style.setProperty("--main-height", mainHeight);
    appElement.style.setProperty("--modules-width", `${modulesELement.clientWidth}px`);
    appElement.style.setProperty("--history-height", `${historyElement.clientHeight}px`);
  };
  defer(setLayoutProps);

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

import { useSettingStore } from "@/modules/setting/store/setting.store";
import { useKeyStore } from "@/stores/key.store";
import { useWindowSize } from "@vueuse/core";
import { useCsssLayout } from "csss-ui";
import { defer, throttle, debounce } from 'lodash-es';
import { storeToRefs } from "pinia";
import { watch } from 'vue';
import { animationDuration } from '../../../composables/constant/env';

export const defineAppLayout = () => {
  const { COMP: Layout, style } = useCsssLayout({
    state: {
      layoutType: "header-footer",
    },
    style: {
      classList: {
        layout: [""],
        header: ["", "app-header"],
        main: ["", "app-main"],
        aside: ["", "app-aside"],
        footer: ["", "app-footer"]
      },
      property: {
        "--aside-width": import.meta.env.ASIDE_WIDTH,
        "--footer-height": '1rem'
      },
    },
  });

  const setLayoutProps = () => {
    const appElement = document.getElementsByClassName("app")[0] as HTMLElement;
    const asideElement = document.getElementsByClassName("app-aside")[0] as HTMLElement;
    const modulesELement = document.getElementsByClassName("app-aside_list")[0] as HTMLElement;
    const headerElement = document.getElementsByClassName("app-header")[0] as HTMLElement;
    const footerElement = document.querySelector(".app-footer");

    const mainHeight = `calc(${window.innerHeight}px -  ${headerElement.clientHeight}px - 2px - ${footerElement?.clientHeight}px)`;
    appElement.style.setProperty("--main-height", mainHeight);
    appElement.style.setProperty("--modules-width", `${modulesELement.clientWidth + 1}px`);
    appElement.style.setProperty("--aside-width", `${asideElement.clientWidth}px`);
  };
  defer(setLayoutProps);
  const { width, height } = useWindowSize();
  defer(() => {
    watch(width, debounce(setLayoutProps, animationDuration));
    watch(height, debounce(setLayoutProps, animationDuration));
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

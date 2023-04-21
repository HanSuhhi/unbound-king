import { useWindowSize } from "@vueuse/core";
import { debounce, defer } from "lodash-es";
import { provide, ref, watch } from "vue";
import { animationDuration } from "../../../composables/constant/env";
import { useKeyStore } from "@/stores/key.store";
import { useCsssLayout } from "@/components/ui/layout";

function autoAdjust(adjust: () => void) {
  defer(adjust);
  const { width, height } = useWindowSize();
  defer(() => {
    watch(width, debounce(adjust, animationDuration));
    watch(height, debounce(adjust, animationDuration));
  });
}

function globalSettintControl() {
  const { addKeyCommand, uninstallKeyCommand } = useKeyStore();

  const settingShow = ref(false);
  provide("setting", settingShow);

  const event: KeyEvent = {
    key: "escape",
    translator: ["enter-setting", "进入设置"],
    fn: (isPressed: boolean) => {
      if (!isPressed && !settingShow.value) settingShow.value = true;
    }
  };
  watch(settingShow, (showing) => {
    if (showing) uninstallKeyCommand(event);
    else addKeyCommand(event);
  }, { immediate: true });
}

export function defineAppLayout() {
  const { COMP: Layout } = useCsssLayout({
    state: {
      layoutType: "header-footer"
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
        "--footer-height": "1rem"
      }
    }
  });

  const setLayoutProps = () => {
    const appElement = document.getElementsByClassName("app")[0] as HTMLElement;
    const asideElement = document.getElementsByClassName("app-aside")[0] as HTMLElement;
    const headerElement = document.getElementsByClassName("app-header")[0] as HTMLElement;
    const footerElement = document.querySelector(".app-footer");

    const mainHeight = `calc(${window.innerHeight}px -  ${headerElement.clientHeight}px - 2px - ${footerElement?.clientHeight}px)`;
    appElement.style.setProperty("--main-height", mainHeight);
    appElement.style.setProperty("--modules-width", "4.5rem");
    appElement.style.setProperty("--aside-width", `${asideElement.clientWidth}px`);
  };
  autoAdjust(setLayoutProps);

  globalSettintControl();

  return { Layout };
}

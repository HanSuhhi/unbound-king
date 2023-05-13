import { useWindowSize } from "@vueuse/core";
import { debounce, defer, delay } from "lodash-es";
import { watch } from "vue";
import { useI18n } from "vue-i18n";
import { animationDuration } from "../../../composables/constant/env";
import { useCsssLayout } from "@/components/ui/layout";

function autoAdjust(adjust: () => void) {
  const { width, height } = useWindowSize();
  const { locale } = useI18n();

  defer(() => {
    watch(width, debounce(adjust, animationDuration));
    watch(height, debounce(adjust, animationDuration));
    watch(locale, () => {
      delay(() => {
        const workshopElement = document.querySelector(".workshop");
        const appElement = document.getElementsByClassName("app")[0] as HTMLElement;
        const { height } = workshopElement!.getBoundingClientRect();
        appElement.style.setProperty("--workshop-height", `${height || 0}px`);
      }, 0);
    });
  });
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
        "--aside-width": import.meta.env.STYLE_ASIDE_WIDTH,
        "--footer-height": "1rem"
      }
    }
  });

  const setLayoutProps = () => {
    const appElement = document.getElementsByClassName("app")[0] as HTMLElement;
    const asideElement = document.getElementsByClassName("app-aside")[0] as HTMLElement;
    const headerElement = document.getElementsByClassName("app-header")[0] as HTMLElement;
    // footer part
    const footer = document.querySelector(".app-footer")!.getBoundingClientRect();
    const footerHeight = footer.height;
    const workshopElement = document.querySelector(".workshop");

    const mainHeight = `calc(${window.innerHeight}px -  ${headerElement.clientHeight}px - 1px - 2 * ${footerHeight}px)`;
    appElement.style.setProperty("--main-height", mainHeight);
    appElement.style.setProperty("--footer-height", `${footerHeight}px`);
    appElement.style.setProperty("--modules-width", import.meta.env.STYLE_ASIDE_MODULES_WIDTH);
    appElement.style.setProperty("--aside-width", `${asideElement.clientWidth}px`);
    appElement.style.setProperty("--workshop-height", `${workshopElement?.getBoundingClientRect().height || 0}px`);
  };
  autoAdjust(setLayoutProps);

  return { Layout, renderLayout: () => defer(setLayoutProps) };
}

import { useWindowSize } from "@vueuse/core";
import { debounce, defer, delay } from "lodash";
import { watch } from "vue";
import { useI18n } from "vue-i18n";
import { TRANSITION_DURATION } from "../../../composables/constant/env";
import { useCsssLayout } from "@/components/ui/layout";

function autoAdjust(adjust: () => void) {
  const { width, height } = useWindowSize();
  const { locale } = useI18n();

  defer(() => {
    watch(width, debounce(adjust, TRANSITION_DURATION));
    watch(height, debounce(adjust, TRANSITION_DURATION));
    watch(locale, () => {
      delay(() => {
        if (import.meta.env.SSR) return;
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
        "--footer-height": "1rem",
        "--header-height": "var(--header-block-height)"
      }
    }
  });

  const setLayoutProps = () => {
    if (import.meta.env.SSR) return;
    const appElement = document.getElementsByClassName("app")[0] as HTMLElement;
    const asideElement = document.getElementsByClassName("app-aside")[0] as HTMLElement;
    const headerElement = document.getElementsByClassName("app-header")[0] as HTMLElement;
    // footer part
    const footer = document.querySelector(".app-footer")?.getBoundingClientRect();
    const footerHeight = footer?.height || 0;
    const workshopElement = document.querySelector(".workshop");

    const mainHeight = `calc(${document.body.getBoundingClientRect().height}px - var(--global-header-height) -  ${headerElement.getBoundingClientRect().height}px  - 2 * ${footerHeight}px)`;
    appElement.style.setProperty("--main-height", mainHeight);
    appElement.style.setProperty("--footer-height", `${footerHeight}px`);
    appElement.style.setProperty("--modules-width", import.meta.env.STYLE_ASIDE_MODULES_WIDTH);
    appElement.style.setProperty("--aside-width", `${asideElement.getBoundingClientRect().width}px`);
    appElement.style.setProperty("--workshop-height", `${workshopElement?.getBoundingClientRect().height || 0}px`);
  };
  autoAdjust(setLayoutProps);

  return { Layout, renderLayout: () => defer(setLayoutProps) };
}

import { useWindowSize } from "@vueuse/core";
import { debounce, defer } from "lodash-es";
import { watch } from "vue";
import { animationDuration } from "../../../composables/constant/env";
import { useCsssLayout } from "@/components/ui/layout";

function autoAdjust(adjust: () => void) {
  defer(adjust);
  const { width, height } = useWindowSize();
  defer(() => {
    watch(width, debounce(adjust, animationDuration));
    watch(height, debounce(adjust, animationDuration));
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
        "--aside-width": import.meta.env.ASIDE_WIDTH,
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
    appElement.style.setProperty("--modules-width", import.meta.env.ASIDE_MODULES_WIDTH);
    appElement.style.setProperty("--aside-width", `${asideElement.clientWidth}px`);
    appElement.style.setProperty("--workshop-height", `${workshopElement?.getBoundingClientRect().height || 0}px`);
  };
  autoAdjust(setLayoutProps);

  return { Layout };
}

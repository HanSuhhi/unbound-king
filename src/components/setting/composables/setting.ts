import { useCsssDrawer } from "csss-ui";
import { defer } from "lodash-es";

export const useSetting = () => {
  /**
   * @description component
   */
  const { COMP: Drawer, state } = useCsssDrawer({
    state: {
      show: true,
      transition: "slide-left",
    },
    style: {
      classList: {
        drawer: ["", "setting-drawer"],
        body: ["setting"],
      },
    },
  });

  defer(() => {
    const ele = document.querySelector<HTMLElement>(".setting-drawer");
    if (ele!.clientWidth > 1920) ele?.style.setProperty("--body-width", "480px");
  });

  return {
    Drawer,
    state,
  };
};

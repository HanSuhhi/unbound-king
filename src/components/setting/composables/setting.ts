import { usePlayerStore } from "@/stores/player.store";
import { useCsssDrawer } from "csss-ui";
import { defer } from "lodash-es";
import { entryDevSettingAuth } from "../../../auth/pages/setting.auth";

export const useSetting = () => {
  const { auth } = usePlayerStore();

  /**
   * @description component
   */
  const { COMP: Drawer, state } = useCsssDrawer({
    state: {
      transition: "slide-left",
      close(show) {
        if (auth.in(entryDevSettingAuth.ticket)) auth.remove(entryDevSettingAuth.ticket);
        show.value = false;
      },
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

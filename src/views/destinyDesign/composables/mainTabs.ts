import { useCsssTabs } from "csss-ui";
import { delay } from "lodash-es";
import { storeToRefs } from "pinia";
import { nextTick, watch } from "vue";
import { useDestinyStore } from "../store/destiny.store";

export const defineTabs = () => {
  const { tabsIndex } = storeToRefs(useDestinyStore());

  const tabs = useCsssTabs({
    state: {
      autoTrigger: false,
    },
    style: {
      panelTransition: "list",
      classList: {
        tabs: ["destiny-design-main_body"],
        list: ["destiny-design-main_cards"],
        panel: ["destiny-design-main_panels"],
        panelItem: ["destiny-design-main_panel"],
        listItem: ["_"],
      },
    },
  });

  const setPanelTotalHeight = () => {
    const Tabs = document.getElementsByClassName("destiny-design-main_cards")[0];
    const Panels = document.getElementsByClassName("destiny-design-main_panels")[0] as HTMLElement;
    Panels.style.height = `calc(100% - ${Tabs.clientHeight}px - 1.7 * var(--clip-size))`;
  };
  nextTick(setPanelTotalHeight);

  return { ...tabs };
};

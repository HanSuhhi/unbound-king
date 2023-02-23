import { useCsssTabs } from "csss-ui";
import { onMounted, nextTick } from "vue";

export const defineTabs = () => {
  const tabs = useCsssTabs({
    state: {
      autoTrigger: false,
    },
    style: {
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
    const Panels = document.getElementsByClassName("destiny-design-main_panel")[0] as HTMLElement;
    Panels.style.height = `calc(100% - ${Tabs.clientHeight}px)`;
  };
  nextTick(setPanelTotalHeight);

  return { ...tabs };
};

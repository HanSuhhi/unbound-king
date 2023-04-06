import { useCsssTabs } from "@/components/ui/tabs";
export const useTableHeaderTabs = () => {
  const { COMP: Tabs } = useCsssTabs({
    style: {
      classList: {
        tabs: ["tabs-header-tabs_tab"],
        list: ["_"],
        listItem: ["_"],
        panel: ["_"],
        panelItem: ["_"],
      },
    },
  });

  return { Tabs };
};

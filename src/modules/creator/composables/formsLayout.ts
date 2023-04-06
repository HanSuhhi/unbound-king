import { useCsssTabs } from "@/components/ui/tabs";

export const defineFormsTabs = (componentName: string) => {
  const tabsName = componentName;
  const listName = `${componentName}_list`;
  const listItemName = `${componentName}_item`;
  const listPanelsName = `${componentName}_panels`;
  const listPanelName = `${componentName}_panel`;

  const Layout = useCsssTabs({
    state: {
      autoTrigger: false,
    },
    style: {
      classList: {
        tabs: ["", tabsName],
        list: [listName],
        listItem: [listItemName],
        panel: [listPanelsName],
        panelItem: [listPanelName],
      },
    },
  });

  return { ...Layout };
};

import { nextTick, onMounted } from "vue";
import { useCsssTabs } from "@/components/ui/tabs";

export function defineCommonTabs(componentName: string) {
  const tabsName = componentName;
  const listName = `${componentName}_list`;
  const listItemName = `${componentName}_item`;
  const listPanelsName = `${componentName}_panels`;
  const listPanelName = `${componentName}_panel`;

  const Layout = useCsssTabs({
    style: {
      classList: {
        tabs: ["", tabsName, "common-tabs"],
        list: [listName, "common-tabs-list"],
        listItem: [listItemName, "common-tabs-list_item"],
        panel: [listPanelsName, "common-tabs-panels"],
        panelItem: [listPanelName]
      }
    }
  });

  const calcListItemWidth = () => {
    const list = document.querySelector(`.${listName}`);
    const items = document.querySelectorAll(`.${listItemName}`);
    const listLeft = list?.getBoundingClientRect().left || 0;
    items.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      const left = rect.left - listLeft;
      const width = rect.width;
      if (!index) {
        (items[0] as HTMLElement).style.setProperty("--rect-width", `${width}px`);
        (items[0] as HTMLElement).style.setProperty("--rect-left", `${left}px`);
      }
      (item as HTMLElement).onclick = () => {
        (items[0] as HTMLElement).style.setProperty("--rect-width", `${width}px`);
        (items[0] as HTMLElement).style.setProperty("--rect-left", `${left}px`);
      };
    });
  };

  onMounted(nextTick.bind(this, calcListItemWidth));

  return { ...Layout };
}

import { nextTick, onMounted } from "vue";
import { setElementCursorPointer } from "../experience/cursor";
import { useCsssTabs } from "@/components/ui/tabs";

export function defineCommonTabs(componentName: string, common = true) {
  const tabsName = componentName;
  const listName = `${componentName}_list`;
  const listItemName = `${componentName}_item`;
  const listPanelsName = `${componentName}_panels`;
  const listPanelName = `${componentName}_panel`;

  const Layout = useCsssTabs({
    style: {
      classList: {
        tabs: ["", tabsName, common ? "common-tabs" : ""],
        list: [listName, common ? "common-tabs-list" : ""],
        listItem: [listItemName, common ? "common-tabs-list_item" : ""],
        panel: [listPanelsName, common ? "common-tabs-panels" : ""],
        panelItem: [listPanelName, common ? "common-tabs-panel" : ""]
      }
    }
  });

  const calcListItemWidth = () => {
    const list = document.querySelector(`.${listName}`);
    const items = document.querySelectorAll(`.${listItemName}`);
    const listLeft = list?.getBoundingClientRect().left || 0;
    items.forEach((item, index) => {
      setElementCursorPointer(item);
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

  onMounted(nextTick.bind(null, calcListItemWidth));

  return { ...Layout };
}

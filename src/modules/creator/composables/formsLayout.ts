import { nextTick, onMounted } from "vue";
import { useCsssTabs } from "@/components/ui/tabs";
import { setElementCursorPointer } from "@/composables/experience/cursor";

function setItemsCursorPointer() {
  if (import.meta.env.SSR) return;
  document.querySelectorAll(".creator-forms_item").forEach(setElementCursorPointer);
}

export function defineFormsTabs(componentName: string) {
  const tabsName = componentName;
  const listName = `${componentName}_list`;
  const listItemName = `${componentName}_item`;
  const listPanelsName = `${componentName}_panels`;
  const listPanelName = `${componentName}_panel`;

  const Layout = useCsssTabs({
    state: {
      autoTrigger: false
    },
    style: {
      classList: {
        tabs: ["", tabsName],
        list: [listName],
        listItem: [listItemName],
        panel: [listPanelsName],
        panelItem: [listPanelName]
      }
    }
  });

  onMounted(nextTick.bind(null, setItemsCursorPointer));

  return { ...Layout };
}

import { nextTick } from "vue";
import { useCsssTabs } from "@/components/ui/tabs";

export function defineTabs() {
  const tabs = useCsssTabs({
    style: {
      panelTransition: "list",
      classList: {
        tabs: ["destiny-design-main_body"],
        list: ["destiny-design-main_cards"],
        panel: ["destiny-design-main_panels"],
        panelItem: ["destiny-design-main_panel"],
        listItem: ["_"]
      }
    }
  });

  const setPanelTotalHeight = () => {
    if (import.meta.env.SSR) return;
    const Tabs = document.getElementsByClassName("destiny-design-main_cards")[0];
    const Panels = document.getElementsByClassName("destiny-design-main_panels")[0] as HTMLElement;
    Panels.style.height = `calc(100% - ${Tabs.getBoundingClientRect().height}px`;
  };
  void nextTick(setPanelTotalHeight);

  const watchTabsWheel = () => {
    if (import.meta.env.SSR) return;
    const box = document.getElementsByClassName("destiny-design-main_cards")[0];

    box.addEventListener("wheel", (event: any) => {
      event.preventDefault();
      box.scrollLeft += event.deltaY;
    });
  };
  void nextTick(watchTabsWheel);

  return { ...tabs };
}

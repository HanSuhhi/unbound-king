import { useCsssTabs } from "@/components/ui/tabs";

export const useHeroesTable = () => {
  const { COMP: HeroesTable, state } = useCsssTabs({
    state: {
      active: 0,
    },
    style: {
      panelTransition: '',
      classList: {
        tabs: ["", "heroes-table"],
        list: ["heroes-table__list"],
        listItem: ["heroes-table__list__item",],
        panel: ["heroes-table__panels"],
        panelItem: ["heroes-table__panel"],
      },
    },
  });

  return {
    HeroesTable,
  };
};

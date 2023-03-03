import { useCsssTabs, useCsssLayout } from "csss-ui";
export const useHeroesTable = () => {
  const { COMP: HeroesTable, state } = useCsssTabs({
    state: {
      active: 0,
    },
    style: {
      needTransition: false,
      classList: {
        tabs: ["", "heroes-table"],
        list: ["heroes-table__list"],
        listItem: ["heroes-table__list__item"],
        panel: ["heroes-table__panels"],
        panelItem: ["heroes-table__panel"],
      },
    },
  });

  return {
    HeroesTable,
  };
};

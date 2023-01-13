import { useCsssTabs, useCsssLayout } from "csss-ui";
export const useHeroesTable = () => {
  const { COMP: HeroesTable, state } = useCsssTabs({
    style: {
      needTransition: false,
      classList: {
        tabs: ["", "heroes-table"],
        list: ["heroes-table__list"],
        listItem: ["heroes-table__list__item"],
        panelItem: ["_"],
      },
    },
  });

  return {
    HeroesTable,
  };
};

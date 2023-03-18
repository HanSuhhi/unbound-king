import { useCsssLayout } from "csss-ui";
import { provide } from "vue";

export const defineCommonLayout = (name: string, reverse = true) => {
  const main = `${name}_main`;
  const aside = `${name}_aside`;

  const layout = useCsssLayout({
    state: { reverse },
    style: {
      classList: {
        layout: ["", name],
        main: ["", main],
        aside: ["", aside],
      },
      property: {
        "--aside-width": import.meta.env.BOX_EXTEND_WIDTH,
      },
    },
  });

  provide("layout-style", layout.style);

  return {
    ...layout,
  };
};

import { useCsssLayout } from "csss-ui";
import { provide } from "vue";

export const defineCommonLayout = (name: string) => {
  const main = `${name}_main`;
  const aside = `${name}_aside`;

  const layout = useCsssLayout({
    state: { reverse: true },
    style: {
      classList: {
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

import { useCsssLayout } from "csss-ui";

export const defineResultLayout = () => ({
  ...useCsssLayout({
    state: {
      reverse: true,
      layoutType: "header-aside",
    },
    style: {
      classList: {
        header: ["", "search-result_header"],
        aside: ["", "search-result_aside"],
        main: ["", "search-result_box"],
      },
      property: {
        "--aside-width": import.meta.env.BOX_EXTEND_WIDTH,
      },
    },
  }),
});

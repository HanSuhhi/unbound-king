import { useCsssLayout } from "csss-ui";
export const defineEthnicityLayout = () => ({
  ...useCsssLayout({
    state: {
      layoutType: "header-footer",
      reverse: true,
    },
    style: {
      classList: {
        aside: ["", "ethnicity-design_aside"],
        main: ["", "ethnicity-design_main"],
      },
    },
  }),
});

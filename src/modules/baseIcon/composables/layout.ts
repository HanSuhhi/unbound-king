import { useCsssLayout } from "csss-ui";

export const defineBaseIconLayout = () => ({
  ...useCsssLayout({
    style: {
      classList: {
        header: ["", "base-icon_header"],
        main: ["", "base-icon_main"],
      },
    },
  }),
});

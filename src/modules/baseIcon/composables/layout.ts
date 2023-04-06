import { useCsssLayout } from "@/components/ui/layout";

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

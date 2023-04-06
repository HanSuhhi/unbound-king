import { useCsssLayout } from "@/components/ui/layout";

export const defineMainLayout = () => ({
  ...useCsssLayout({
    style: {
      classList: {
        header: ["", "ethnicity-main_header"],
        aside: ["", "ethnicity-main_aside"],
        main: ["", "ethnicity-main_box"],
      },
      property: {
        "--aside-width": import.meta.env.BOX_EXTEND_WIDTH,
      },
    },
  }),
});

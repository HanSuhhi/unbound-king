import { useCsssLayout } from "csss-ui";
import { DATA_Ethnicity_Static } from "../data/static.data";
export const defineMainLayout = () => ({
  ...useCsssLayout({
    style: {
      classList: {
        header: ["", "ethnicity-main_header"],
        aside: ["", "ethnicity-main_aside"],
        main: ["", "ethnicity-main_box"],
      },
      property: {
        "--aside-width": DATA_Ethnicity_Static.SEARCH_RESULT_MAX_WIDTH,
      },
    },
  }),
});

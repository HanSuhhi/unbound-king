import { useCsssLayout } from "csss-ui";

export const defineAttributeValueLayout = () => ({
  ...useCsssLayout({
    state: { reverse: true },
    style: {
      classList: {
        main: ["", "attribute-value_main"],
        aside: ["", "attribute-value_aside"],
      },
      property: {
        "--aside-width": import.meta.env.BOX_EXTEND_WIDTH,
      },
    },
  }),
});

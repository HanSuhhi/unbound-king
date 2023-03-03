import { useCsssLayout, useCsssRadio } from "csss-ui";
export const useTableHeader = () => {
  const { COMP: Layout } = useCsssLayout({
    style: {
      property: {
        "--aside-width": "40%",
      },
    },
  });

  const { COMP: Radio, state } = useCsssRadio({
    style: {
      classList: {
        radio: ["table-header_nation-radio"],
      },
    },
  });

  return { Layout, Radio };
};

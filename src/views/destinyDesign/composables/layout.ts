import { useCsssLayout } from "csss-ui";
export const defineLayout = () => {
  const layout = useCsssLayout({
    state: {
      layoutType: "header-footer",
      reverse: true,
    },
    style: {
      classList: {
        aside: ["", "destiny-design_aside"],
        main: ["", "destiny-design_main"],
      },
    },
  });

  return {
    ...layout,
  };
};

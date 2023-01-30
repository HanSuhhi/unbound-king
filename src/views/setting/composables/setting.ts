import { useCsssLayout } from "csss-ui";

export const useSetting = () => {
  const { COMP } = useCsssLayout({
    style: {
      footerHeightSize: "large",
      classList: {
        main: ["", "setting-main"],
      },
      property: {
        "--header-height": "calc(var(--font-normal) + var(--large) * 2)",
      },
    },
  });

  return { COMP };
};

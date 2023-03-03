import { useCsssLayout } from "csss-ui";

export const useSettingLayout = () => {
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

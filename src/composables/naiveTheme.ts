import type { GlobalThemeOverrides } from "naive-ui";
import { darkTheme } from "naive-ui";

const white = "var(--white)";
const bg2 = "var(--bg-color-bright-2)";
const main = "var(--main-color)";
const no = "none";

export const defineNaiveTheme = () => {
  const darkThemeOverrides: GlobalThemeOverrides = {
    common: {
      lineHeight: "1",
    },
    Message: {
      colorInfo: bg2,
      textColorInfo: white,
      boxShadowInfo: no,
      iconColorInfo: main,
    },
    Tooltip: {
      color: bg2,
      textColor: white,
    },
  };

  return { darkTheme, darkThemeOverrides };
};

import type { GlobalThemeOverrides } from "naive-ui";
import { darkTheme } from "naive-ui";

const white = "var(--white)";
const bg2 = "var(--bg-color-bright-2)";
const main = "var(--main-color)";
const mainb1 = "var(--main-color-bright-1)";
const no = "none";

export const defineNaiveTheme = () => {
  const darkThemeOverrides: GlobalThemeOverrides = {
    common: {
      lineHeight: "1",
      primaryColor: main,
      primaryColorHover: mainb1,
      primaryColorPressed: mainb1,
    },
    Drawer: {
      color: bg2
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
    Popover: {
      color: bg2,
    },
  };

  return { darkTheme, darkThemeOverrides };
};

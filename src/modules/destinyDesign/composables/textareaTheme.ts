import type { InputProps } from "naive-ui";

export function useTextareaTheme() {
  type InputThemeOverrides = NonNullable<InputProps["themeOverrides"]>;

  const theme: InputThemeOverrides = {
    lineHeightTextarea: "1.8",
    fontSizeMedium: "var(--font-body)",
    color: "transparent",
    colorFocus: "transparent",
    borderFocus: "transparent",
    borderHover: "transparent"
  };

  return theme;
}

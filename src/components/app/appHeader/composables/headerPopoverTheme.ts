import type { PopoverProps } from "naive-ui";

export function useHeaderPopoverTheme() {
  type PopoverThemeOverrides = NonNullable<PopoverProps["themeOverrides"]>;
  const popoverThemeOverrides: PopoverThemeOverrides = {
    color: "var(--bg-color)"
  };

  return { popoverThemeOverrides };
}

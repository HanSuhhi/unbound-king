import type { PopoverProps } from "naive-ui";

export function useHeaderPopoverTheme() {
  type PopoverThemeOverrides = NonNullable<PopoverProps["themeOverrides"]>;
  const popoverThemeOverrides: PopoverThemeOverrides = {
    color: "var(--bg-color)"
  };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  return { popoverThemeOverrides };
}

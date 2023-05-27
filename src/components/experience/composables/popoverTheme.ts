export function usePopoverTheme() {
  // TODO
  // type PopoverThemeOverrides = NonNullable<PopoverProps["themeOverrides"]>;
  // const popoverThemeOverrides: PopoverThemeOverrides = {
  const popoverThemeOverrides: any = {
    color: "var(--bg-color)"
  };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  return { popoverThemeOverrides };
}

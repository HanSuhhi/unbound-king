type AsideModule = {
  key: string;
  title: string;
  icon: BaseIconName;
  comp?: Component;
  pages?: import("naive-ui").MenuOption[];
};
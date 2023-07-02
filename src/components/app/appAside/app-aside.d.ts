type AsideModule = {
  key: string;
  title: string;
  icon: BaseIconName;
  type: "default-menu" | "exter-module";
  comp?: Component;
  pages?: import("naive-ui").MenuOption[];
};

type ModulePage = {
  path: string;
  title: string;
  description: string;
  icon: BaseIconName;
  key: number[];
  children?: ModulePage[];
  auth: Set<string>;
  module: string;
  collapse?: boolean;
};

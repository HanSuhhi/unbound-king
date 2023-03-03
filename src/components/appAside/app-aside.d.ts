type AsideModule = {
  key: string;
  title: string;
  icon: string;
  comp?: Component;
  type: "default-menu" | "exter-module";
  pages?: ModulePage[];
};

type ModulePage = {
  path: string;
  title: string;
  description: string;
  icon: string;
  key: number[];
  children?: ModulePage[];
  auth: Set<string>;
  module: string;
  collapse?: boolean;
};

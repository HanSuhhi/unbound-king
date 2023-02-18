type AppAsideModule = {
  /**
   * @description module unique name
   */
  key: string;
  icon: string;
  comp?: Component;
  type: "default-menu";
  pages: ModulePage[];
};

type ModulePage = {
  path: string;
  title: string;
  icon: string;
  redirect?: string;
  key: number[];
  children?: ModulePage[];
  auth: Set<string>;
  module: string;
};

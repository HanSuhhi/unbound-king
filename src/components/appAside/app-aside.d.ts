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
  path?: string;
  name?: string;
  icon?: string;
  children?: ModulePage[];
  auth: Set<string>;
};

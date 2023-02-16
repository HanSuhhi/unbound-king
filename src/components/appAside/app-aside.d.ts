type AppAsideModule = {
  key: string;
  show?: boolean;
  icon: string;
  comp?: Component;
  type: "default-menu";
  pages: ModulePage[];
};

export const defineModuleConfig = (pages: Array<Omit<ModulePage, "auth" | "module"> & { auth?: ModulePage["auth"]; module?: string }>): ModulePage[] => {
  return pages.map((page) => {
    if (!page.auth) page.auth = new Set();
    return page;
  }) as ModulePage[];
};

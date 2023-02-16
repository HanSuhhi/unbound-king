export const defineModuleConfig = (pages: Array<Omit<ModulePage, "auth"> & { auth?: ModulePage["auth"] }>): ModulePage[] => {
  return pages.map((page) => {
    if (!page.auth) page.auth = new Set();
    return page;
  }) as ModulePage[];
};

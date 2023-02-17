type Page = Omit<ModulePage, "auth" | "module" | "children"> & { auth?: ModulePage["auth"]; module?: string; children?: Page[] };
type Pages = Array<Page>;

const setPageAuthAndModule = (page: Page): void => {
  if (!page.auth) page.auth = new Set();
};

export const defineModuleConfig = (pages: Pages): ModulePage[] => {
  return pages.map((page) => {
    setPageAuthAndModule(page);
    if (page.children) page.children.forEach((childPage) => setPageAuthAndModule(childPage));
    return page;
  }) as ModulePage[];
};

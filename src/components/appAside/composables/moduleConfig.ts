type Page = Omit<ModulePage, "auth" | "module" | "children" | "key"> & {
  auth?: ModulePage["auth"];
  module?: string;
  children?: Page[];
  key?: number[];
};
type Pages = Array<Page>;

const setPageAuthAndModule = (page: Page): void => {
  if (!page.auth) page.auth = new Set();
};

export const defineModuleConfig = (pages: Pages): ModulePage[] => {
  return pages.map((page, index) => {
    setPageAuthAndModule(page);
    page.key = [index];
    if (page.children) {
      page.collapse = false;
      page.children.forEach((childPage, childIndex) => {
        setPageAuthAndModule(childPage);
        childPage.key = [index, childIndex];
      });
    }
    return page;
  }) as ModulePage[];
};

interface LoadCssOptions {
  dark?: boolean
}

const themeDefaultPath = "/src/styles/themes/";

function createCssElement() {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";

  return link;
}

/**
 * Generates a CSS path based on the given path and theme.
 * @param {string} path The base path of the CSS file.
 * @param {boolean} [dark] Whether to use the dark theme. Defaults to false.
 * @returns {string} The full CSS path.
 */
function defineCssPath(path: string, dark = false) {
  return `${themeDefaultPath}${dark ? "dark/" : ""}${path}.css`;
}

/**
 * Checks if a CSS file with the given filename is loaded using Array.find().
 * @param {string} filename The filename of the CSS file to check.
 * @returns {HTMLElement|undefined} The <link> element for the CSS file if found, undefined otherwise.
 */
function isCssFileRegist(filename: string): HTMLLinkElement | undefined {
  if (import.meta.env.SSR) return;
  const allsuspects = document.head.getElementsByTagName("link");
  return Array.from(allsuspects)
    .find(item => item.href.includes(filename));
}

export function loadCss(path: string, options?: LoadCssOptions) {
  if (import.meta.env.SSR) return;
  const link = createCssElement();
  link.href = defineCssPath(path, options?.dark);
  document.head.appendChild(link);
}

export function loadBothCss(path: string) {
  loadCss(path);
  loadCss(path, { dark: true });
}

export function removeCss(path: string, options?: LoadCssOptions) {
  const filename = defineCssPath(path, options?.dark);
  const item = isCssFileRegist(filename);
  if (item) item.parentElement?.removeChild(item);
}

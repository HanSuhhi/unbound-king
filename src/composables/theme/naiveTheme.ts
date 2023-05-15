import type { GlobalThemeOverrides } from "naive-ui";
import { darkTheme } from "naive-ui";

const white = "var(--white)";

const bg2 = "var(--bg-color-bright-2)";
const main = "var(--main-color)";
const mainb1 = "var(--main-color-bright-1)";
const no = "none";
const padding = "var(--base-margin)";

export function defineNaiveTheme() {
  const darkThemeOverrides: GlobalThemeOverrides = {
    common: {
      lineHeight: "1",
      primaryColor: "#F0C239",
      primaryColorHover: mainb1,
      primaryColorPressed: mainb1
    },
    Button: {
      textColorHover: "var(--white-bright-2)",
      textColorPressed: "var(--white-bright-2)",
      textColorFocus: "var(--white-bright-2)"
    },
    Switch: {
      railColorActive: main
    },
    Drawer: {
      color: bg2
    },
    Message: {
      colorInfo: bg2,
      textColorInfo: white,
      boxShadowInfo: no,
      iconColorInfo: main
    },
    Tooltip: {
      color: bg2,
      textColor: white
    },
    Popover: {
      color: bg2,
      padding
    }
  };

  return { darkTheme, darkThemeOverrides };
}

/**
 * Binds a @layer utilities {} preamble to new <style> elements with a cssr-id attribute added under <head>.
 * This is done using a MutationObserver.
 */
export function bindNaiveUILayer() {
  const layerBefore = "@layer utilities {";
  const targetNode = document.querySelector("head")!;
  /**
   * The MutationObserver instance, observing the targetNode for addedNodes (new child elements)
   */
  const observer = new MutationObserver((mutationsList) => {
    mutationsList.forEach(({ addedNodes }) => {
      /**
       * Checks if the new added node is a <style> element with the cssr-id attribute.
       * @param {Node} addedNodes[0] The new added node under <head>
       */
      const style = addedNodes[0] as HTMLStyleElement;
      if (!style.hasAttribute("cssr-id")) return;

      /**
       * Checks if the given style element already contains the @layer utilities {} preamble.
       * @param {string} style.innerText The innerText of the <style> element.
       * @returns {boolean} True if the preamble is present, false otherwise.
       */
      if (style.innerText.includes(layerBefore)) return;

      /**
       * Prepends the @layer utilities {} preamble to the given style element.
       * @param {string} style.innerHTML The innerHTML of the <style> element.
       */
      style.innerHTML = `${layerBefore}\n\n${style.innerHTML}\n\n}`;
    });
  });

  observer.observe(targetNode, { childList: true });
}

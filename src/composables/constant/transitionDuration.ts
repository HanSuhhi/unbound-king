import { nextTick } from "vue";
import { forEach, kebabCase } from "lodash";
import { HEADER_HEIGHT, HTML_FONT_SIZE, TRANSITION_DURATION } from "./env";
import { WindowEnum } from "@/enums/window.enum";

/**
 * Set default transition duration
 * @function setDefaultTransitionDuration
 * @returns {number} Animation number
 */
function setDefaultTransitionDuration(): number {
  const animationNumber = TRANSITION_DURATION / 1000 || 0;
  document.querySelector("body")?.style.setProperty("--transition-duration", `${animationNumber}s`);
  return animationNumber;
}

/**
 * Set default font size of the HTML document
 * @function setDefaultHtmlFontSize
 * @returns {string} The final font size unit in px
 */
function setDefaultHtmlFontSize(): string {
  const fontsize = HTML_FONT_SIZE || "16px";
  document.documentElement.style.fontSize = fontsize;
  return fontsize;
}

/**
 * Set default header height
 * @function setDefaultHeaderHeight
 * @returns {string} header height
 */
function setDefaultHeaderHeight(): string {
  const headerHeight = HEADER_HEIGHT || " 4.5rem";
  document.querySelector("body")?.style.setProperty("--global-header-height", `${headerHeight}`);
  return headerHeight;
}

function setWindowSize() {
  forEach(WindowEnum, (value, key) => {
    document.querySelector("body")?.style.setProperty(`--${kebabCase(key)}`, value.toString());
  });
}

export async function provideStaticStyleVariables() {
  if (import.meta.env.SSR) return;
  await nextTick(setDefaultTransitionDuration);
  await nextTick(setDefaultHtmlFontSize);
  await nextTick(setDefaultHeaderHeight);
  await nextTick(setWindowSize);
}

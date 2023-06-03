import { nextTick } from "vue";
import { HEADER_HEIGHT, HTML_FONT_SIZE, TRANSITION_DURATION } from "./env";

/**
 * Set default transition duration
 * @function setDefaultTransitionDuration
 * @returns {number} Animation number
 */
function setDefaultTransitionDuration(): number {
  const animationNumber = TRANSITION_DURATION / 1000 || 0;
  if (!import.meta.env.SSR)
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
  if (!import.meta.env.SSR)
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
  if (!import.meta.env.SSR)
    document.querySelector("body")?.style.setProperty("--global-header-height", `${headerHeight}`);
  return headerHeight;
}

export async function provideStaticStyleVariables() {
  await nextTick(setDefaultTransitionDuration);
  await nextTick(setDefaultHtmlFontSize);
  await nextTick(setDefaultHeaderHeight);
}

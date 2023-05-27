import { nextTick } from "vue";
import { HTML_FONT_SIZE, TRANSITION_DURATION } from "./env";

/**
 * Set default transition duration
 * @function setDefaultTransitionDuration
 * @returns {number} Animation number
 */
function setDefaultTransitionDuration() {
  const animationNumber = TRANSITION_DURATION / 1000 || 0;
  if (!import.meta.env.SSR)
    document.querySelector("body")?.style.setProperty("--transition-duration", `${animationNumber}s`);
}

/**
 * Set default font size of the HTML document
 * @function setDefaultHtmlFontSize
 * @returns {string} The final font size unit in px
 */
function setDefaultHtmlFontSize() {
  const fontsize = HTML_FONT_SIZE || "16px";
  if (!import.meta.env.SSR)
    document.documentElement.style.fontSize = fontsize;
  return fontsize;
}

export async function provideStaticStyleVariables() {
  await nextTick(setDefaultTransitionDuration);
  await nextTick(setDefaultHtmlFontSize);
}

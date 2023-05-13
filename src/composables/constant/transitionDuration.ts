import { nextTick } from "vue";

export async function provideTransitionDuration() {
  function setDefaultTransitionDuration() {
    const element = document.querySelector("body");
    element?.style.setProperty("--transition-duration", `${Number(import.meta.env.STYLE_ANIMATION_DURATION) / 1000}s`);
  }
  await nextTick(setDefaultTransitionDuration);
}

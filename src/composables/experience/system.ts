/**
 * Enter full screen mode
 */
async function fullScreen() {
  if (import.meta.env.SSR) return;
  await document.querySelector("body")?.requestFullscreen();
}

/**
 * Exit full screen mode
 */
async function exitFullScreen() {
  if (import.meta.env.SSR) return;
  await document.exitFullscreen();
}

/**
 * full screen mode?
 */
export function isFullScreen() {
  if (import.meta.env.SSR) return;
  return document.fullscreenElement !== null;
}

/**
 * Toggle full screen mode
 */
export async function toggleFullScreen() {
  if (isFullScreen()) await exitFullScreen();
  else await fullScreen();
}

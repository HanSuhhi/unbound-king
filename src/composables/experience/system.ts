/**
 * Enter full screen mode
 */
async function fullScreen() {
  await document.querySelector("body")?.requestFullscreen();
}

/**
 * Exit full screen mode
 */
async function exitFullScreen() {
  await document.exitFullscreen();
}

/**
 * Is full screen mode?
 */
export function isFullScreen() {
  return document.fullscreenElement !== null;
}

/**
 * Toggle full screen mode
 */
export async function toggleFullScreen() {
  if (isFullScreen()) await exitFullScreen();
  else await fullScreen();
}

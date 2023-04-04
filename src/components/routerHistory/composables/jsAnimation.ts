let scrollPosition = 0;

export function smoothScrollTo(targetPosition: number, duration: number) {
  const startPosition = scrollPosition;
  const distance = targetPosition - startPosition;
  const startTime = performance.now();

  function step(currentTime: number) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const newPosition = startPosition + distance * progress;
    document.querySelector(".router-history_box")!.scrollLeft = newPosition;

    if (progress < 1) window.requestAnimationFrame(step);
    else scrollPosition = newPosition;
  }

  window.requestAnimationFrame(step);
}
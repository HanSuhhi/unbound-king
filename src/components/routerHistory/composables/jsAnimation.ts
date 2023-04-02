let scrollPosition = 0;

export function smoothScrollTo(targetPosition: number, duration: number) {
  const startPosition = scrollPosition;
  const distance = targetPosition - startPosition;
  const startTime = performance.now(); // 获取当前时间戳

  function step(currentTime: number) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1); // 计算滚动进度（取值范围为 0 到 1）
    const newPosition = startPosition + distance * progress; // 计算当前滚动位置
    document.querySelector(".router-history_box")!.scrollLeft = newPosition; // 设置滚动条距离

    if (progress < 1) window.requestAnimationFrame(step); // 继续滚动
    else scrollPosition = newPosition; // 更新滚动位置
  }

  window.requestAnimationFrame(step); // 开始滚动动画
}
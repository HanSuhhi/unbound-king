import gsap from "gsap";

export function onBeforeEnter(el: Element) {
  (el as HTMLElement).style.opacity = "0";
  (el as HTMLElement).style.transform = "translateX(calc(-1 * var(--large)))";
}

export function onEnter(el: Element, done: gsap.Callback) {
  gsap.to(el, {
    opacity: 1,
    x: 0,
    width: "auto",
    duration: 1,
    onComplete: done
  });
}

export function onLeave(el: Element, done: gsap.Callback) {
  gsap.to(el, {
    opacity: (_, el: Element) => {
      [1, 2].forEach((index) => {
        (el.children as unknown as HTMLElement[])[index].style.opacity = "0";
      });
      return 0;
    },
    width: 0,
    padding: 0,
    x: "var(--large)",
    onComplete: done
  });
}

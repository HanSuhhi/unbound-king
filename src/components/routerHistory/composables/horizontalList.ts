import gsap from "gsap";

export function onBeforeEnter(el: any) {
  el.style.opacity = 0;
  el.style.transform = "translateX(calc(-1 * var(--large)))";
}

export function onEnter(el: any, done: any) {
  gsap.to(el, {
    opacity: 1,
    x: 0,
    width: "auto",
    duration: 1,
    onComplete: done,
  });
}

export function onLeave(el: any, done: any) {
  gsap.to(el, {
    opacity: (_, el) => {
      el.children[1].style.opacity = 0;
      el.children[2].style.opacity = 0;
      return 0;
    },
    width: 0,
    padding: 0,
    x: 'var(--large)',
    onComplete: done,
  });
}

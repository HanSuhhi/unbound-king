import type { CSSProperties, Directive } from "vue";
import { delay, random } from "lodash-es";
import { animationDuration } from "@/composables/constant/env";

function createWaveElement() {
  const child = document.createElement("div");
  child.className = "wave";
  return child;
}

function initParentElement(parentElement: HTMLElement) {
  return (waveElement: HTMLElement) => {
    const { left: elLeft, top: elTop } = parentElement.getBoundingClientRect();

    parentElement.style.overflow = "hidden";
    parentElement.appendChild(waveElement);
    return { elLeft, elTop };
  };
}

function onMouseDown({ x: left, y: top }: MouseEvent) {
  const parentElement = <HTMLElement>window.event!.currentTarget;
  const waveElement = createWaveElement();
  const { elLeft, elTop } = initParentElement(parentElement)(waveElement);

  (<Array<[key: keyof CSSProperties, value: string | number]>>[
    ["--left", left],
    ["--top", top],
    ["--el-top", elTop],
    ["--el-left", elLeft],
    ["--border-radius", `${random(20, 70)}% ${random(20, 70)}% ${random(20, 70)}% ${random(20, 70)}% `],
    ["--width", parentElement.getBoundingClientRect().width],
    ["--height", parentElement.getBoundingClientRect().height]
  ]).forEach(([key, value]) => {
    waveElement.style.setProperty(key, value as string);
  });

  waveElement.classList.add("paper-ripple");

  document.onmouseup = () => {
    waveElement.classList.add("paper-ripple_end");
    delay(waveElement.remove.bind(waveElement), animationDuration);
  };
}

export function usePaperRipple() {
  const paperRipple: Directive<HTMLElement, boolean> = {
    mounted: (el: HTMLElement) => el.addEventListener("mousedown", onMouseDown)
  };

  return { paperRipple };
}

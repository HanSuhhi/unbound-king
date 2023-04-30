import type { Directive } from "vue";
import { random } from "lodash-es";
import { animationDuration } from "@/composables/constant/env";

function createWaveNode() {
  const child = document.createElement("div");
  child.className = "wave";
  return child;
}

function parseGapFromElement(el: HTMLElement) {
  el.style.overflow = "hidden";
  const rect = el.getBoundingClientRect();
  const x = rect.left;
  const y = rect.top;
  return { x, y };
}

export function usePaperRipple() {
  const paperRipple: Directive<HTMLElement, boolean> = {
    mounted: (el: HTMLElement) => {
      el.onmousedown = ({ x, y }) => {
        const { x: elX, y: elY } = parseGapFromElement(el);
        const child = createWaveNode();
        el.appendChild(child);

        // set wave node style
        child.style.left = `${x - elX - 5}px`;
        child.style.top = `${y - elY - 5}px`;
        child.style.borderRadius = `${random(20, 70)}% ${random(20, 70)}% ${random(20, 70)}% ${random(20, 70)}% `;
        child.style.width = `${el.clientWidth * 2.1}px`;
        child.style.marginLeft = `${-el.clientWidth * 1.05}px`;
        child.style.height = `${el.clientHeight * 3}px`;
        child.style.marginTop = `${-el.clientHeight * 1.5}px`;

        document.onmouseup = () => {
          child.style.transitionDuration = `${animationDuration}ms`;
          child.style.opacity = "0";
          setTimeout(() => {
            child.remove();
          }, animationDuration);
        };
      };
    }
  };

  return { paperRipple };
}

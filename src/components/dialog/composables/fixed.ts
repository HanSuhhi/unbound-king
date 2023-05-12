import { ref } from "vue";

export function useFixed() {
  const fixed = ref(false);
  const scrolling = ref(false);

  const changeFixed = (ev: MouseEvent) => {
    let moveX: number, moveY: number;
    const mouseXStart = ev.clientX;
    const mouseYStart = ev.clientY;
    document.onmousemove = (e) => {
      scrolling.value = true;
      const mouseXEnd = e.clientX;
      const mouseYEnd = e.clientY;
      moveX = mouseXEnd - mouseXStart;
      moveY = mouseYEnd - mouseYStart;
      if ((moveX || moveY) && !fixed.value) fixed.value = true;
    };
    document.onmouseup = () => {
      document.onmousemove = null;
      scrolling.value = false;
    };
  };

  return { fixed, changeFixed, scrolling };
}

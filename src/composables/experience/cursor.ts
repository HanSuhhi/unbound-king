import { ref, watch } from "vue";

type CursorStatus = "default" | "active";

export function useCorsor() {
  const cursorState = ref<CursorStatus>("default");

  watch(cursorState, (state) => {
    if (!import.meta.env.SSR)
      document.body.setAttribute("cursor-active", state);
  }, { immediate: true });

  if (!import.meta.env.SSR) {
    window.onmousedown = () => {
      cursorState.value = "active";
    };
    window.onmouseup = () => {
      cursorState.value = "default";
    };
  }
  return { cursorState };
}

export function setElementCursorPointer(element: Element) {
  element.setAttribute("cursor-pointer", "");
}

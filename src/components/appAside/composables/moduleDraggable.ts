import { useDraggable } from "@vueuse/core";
import type { useCsssTabs } from "csss-ui";
import { nextTick, watchEffect, watch } from "vue";

const addStylesWidthStyleString = (style: string, ele: HTMLElement | undefined) => {
  const styles = style.split(";");
  styles.forEach((_style) => {
    if (style) {
      const [property, value] = _style.split(":");
      ele!.style[property as any] = value;
    }
  });
};

export const makeModuleDraggable = (tabs: ReturnType<typeof useCsssTabs>) => {
  nextTick(() => {
    const aside = tabs.read.value.tabs;
    const list = tabs.read.value.tabsList;
    const asideWidth = aside!.clientWidth;
    const asideHeight = window.innerHeight;
    const listWidth = list!.clientWidth;
    const listHeight = list!.clientHeight;
    const initX = asideWidth - listWidth / 2;
    const initY = asideHeight / 2 - listHeight / 2;

    const { style, x, y } = useDraggable(list, {
      initialValue: { x: initX, y: initY },
    });
    watchEffect(() => addStylesWidthStyleString(style.value, tabs.read.value.tabsList));
    watch(x, (newX) => {
      if (newX > initX) x.value = initX;
      if (newX < 0) x.value = 0;
    });
    watch(y, (newY) => {
      const bottomHeight = asideHeight - listHeight;
      if (newY > bottomHeight) y.value = bottomHeight;
      if (newY < 0) y.value = 0;
    });
  });
};

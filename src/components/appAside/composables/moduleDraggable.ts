import { useDraggable } from "@vueuse/core";
import type { useCsssTabs } from "csss-ui";
import type { WatchStopHandle } from "vue";
import { nextTick, watchEffect, watch } from "vue";
import { storeToRefs } from "pinia";
import { useAppAsideStore } from "@/components/appAside/store/aside.store";

const addStylesWidthStyleString = (style: string, ele: HTMLElement | undefined) => {
  const styles = style.split(";");
  styles.forEach((_style) => {
    if (style) {
      const [property, value] = _style.split(":");
      ele!.style[property as any] = value;
    }
  });
};

let limitX: WatchStopHandle;
let limitY: WatchStopHandle;

const clearLimits = () => {
  limitX?.();
  limitY?.();
};

export const makeModuleDraggable = (tabs: ReturnType<typeof useCsssTabs>) => {
  const { asideCollapsed } = storeToRefs(useAppAsideStore());

  const setModuleDraggableLimit = () => {
    clearLimits();
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

    const limitXMethod = (newX: number) => {
      if (newX > initX) x.value = initX;
      if (newX < 0) x.value = 0;
    };
    const limitYMethod = (newY: number) => {
      const bottomHeight = asideHeight - listHeight;
      if (newY > bottomHeight) y.value = bottomHeight;
      if (newY < 0) y.value = 0;
    };

    limitX = watch(x, limitXMethod);
    limitY = watch(y, limitYMethod);
  };

  nextTick(setModuleDraggableLimit);

  watch(asideCollapsed, setTimeout.bind(this, setModuleDraggableLimit, 1000));
};

import { size as getSize } from "lodash";
import type { Ref } from "vue";
import { nextTick, onMounted, ref, unref, watchEffect } from "vue";
import { useGenerator } from "../../composables/generator";
import { useTemplateClassList } from "../../composables/templateClassList";
import type { StyleSetter } from "../../tool/styleSetter.tool";
import { useLayoutTemplate } from "./layoutTemplate";

export function useLayout(styleSetter: Ref<StyleSetter | undefined>, element: Ref<HTMLElement | undefined>, slots: any) {
  const { reverse, defaultTemplate } = useLayoutTemplate(slots, styleSetter);

  /**
   * @description layout type
   */
  const { generator: layoutType } = useGenerator<CLayoutType>("header-footer");

  watchEffect(() => {
    void nextTick(() => {
      unref(styleSetter)?.addClass(`csss-layout-${layoutType.value}`);
    });
  });

  /**
   * @description size
   */
  const getSlotsSize = () => getSize(slots);
  const size = ref(getSlotsSize());

  if (!import.meta.env.SSR) {
    const observer = new MutationObserver((mutationList) => {
      for (const mutation of mutationList)
        if (mutation.type === "childList") size.value = getSlotsSize();
    });
    onMounted(() => observer.observe(element.value!, { childList: true }));
  }

  return {
    layoutType,
    reverse,
    size,
    ...useTemplateClassList(["csss-layout"])
  };
}

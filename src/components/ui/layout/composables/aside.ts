import type { StyleSetter } from "../../tool/styleSetter.tool";
import { defer, isNumber } from "lodash-es";
import type { Ref, Slot } from "vue";
import { unref, watchEffect } from "vue";
import { useSize } from '../../composables/size';
import { useTemplateClassList } from '../../composables/templateClassList';

export function useAside(styleSetter: Ref<StyleSetter | undefined>, aside?: Slot) {
  const key = "aside-width";
  const { size: asideWidthSize } = useSize<CLayoutAsideWidthSize>(styleSetter, key);

  watchEffect(() => {
    // 如果没有 aside，则取消其宽度
    if (!aside) defer(() => unref(styleSetter)?.setRemNumber(0, key));
  });

  return {
    asideWidthSize,
    ...useTemplateClassList(['csss-layout__aside'])
  };
}

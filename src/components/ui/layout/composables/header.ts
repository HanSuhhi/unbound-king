import type { StyleSetter } from "../../tool/styleSetter.tool";
import { defer } from "lodash-es";
import type { Ref, Slot } from "vue";
import { unref, watchEffect } from 'vue';
import { useTemplateClassList } from "../../composables/templateClassList";
import { useSize } from "../../composables/size";

export function useHeader(styleSetter: Ref<StyleSetter | undefined>, header?: Slot) {
  const key = "header-height";
  const { size: headerHeightSize } = useSize<CLayoutHeaderHeightSize>(styleSetter, key);

  watchEffect(() => {
    // 如果没有 header，则取消其高度
    if (!header) defer(() => unref(styleSetter)?.setRemNumber(0, "--header-height"));
  });

  return {
    headerHeightSize,
    ...useTemplateClassList(['csss-layout__header'])
  };
}

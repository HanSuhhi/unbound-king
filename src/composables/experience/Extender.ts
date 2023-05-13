import type { ComputedRef } from "vue";
import { inject, ref, watch } from "vue";

interface Dataset {
  SEARCH_RESULT_MAX_WIDTH: string
  SEARCH_RESULT_MIN_WIDTH: string
}

const defaultDataset: Dataset = {
  SEARCH_RESULT_MAX_WIDTH: import.meta.env.STYLE_EXTEND_WIDTH,
  SEARCH_RESULT_MIN_WIDTH: import.meta.env.STYLE_COLLAPSE_WIDTH
};

/**
 * @description remember to provide `layout-style`
 */
export function defineExtender(dataset: Dataset = defaultDataset) {
  const isExtend = ref(true);
  const mainStyle = inject<ComputedRef<UseCsssLayoutProps["style"]>>("layout-style");

  watch(isExtend, (extending) => {
    mainStyle!.value!.property!["--aside-width"] = dataset[extending ? "SEARCH_RESULT_MAX_WIDTH" : "SEARCH_RESULT_MIN_WIDTH"];
  });

  return isExtend;
}

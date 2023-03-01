import type { ComputedRef } from "vue";
import { inject, ref, watch } from "vue";

type Dataset = {
  SEARCH_RESULT_MAX_WIDTH: string;
  SEARCH_RESULT_MIN_WIDTH: string;
};

const defaultDataset: Dataset = {
  SEARCH_RESULT_MAX_WIDTH: import.meta.env.BOX_ECTEND_WIDTH,
  SEARCH_RESULT_MIN_WIDTH: import.meta.env.BOX_COLLAPSE_WIDTH,
};

/**
 * @description remember to provide `layout-style`
 */
export const defineExtender = (dataset: Dataset = defaultDataset) => {
  const isExtend = ref(true);
  const mainStyle = inject<ComputedRef<UseCsssLayoutProps["style"]>>("layout-style");

  watch(isExtend, (extending) => {
    mainStyle!.value!.property!["--aside-width"] = dataset[extending ? "SEARCH_RESULT_MAX_WIDTH" : "SEARCH_RESULT_MIN_WIDTH"];
  });

  return isExtend;
};

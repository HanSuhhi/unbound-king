import { range } from "lodash-es";
import type { Ref } from "vue";
import { computed } from "vue";
import { useTemplateClassList } from "../../composables/templateClassList";

export const useTabsPanel = (total: Ref<number>, active: Ref<number>) => {
  /**
   * @description panels
   */
  const panels = computed(() => range(total.value).map((index) => `panel-${index}`));

  /**
   * @description style
   */
  const { classList: panelItemClassList } = useTemplateClassList(["csss-tabs__panel"]);


  return {
    panels, panelItemClassList,
    ...useTemplateClassList(["csss-tabs__panels"]),
  };
};

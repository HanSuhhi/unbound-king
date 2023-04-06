import { useTemplateClassList } from "../../composables/templateClassList";
import { ref } from "vue";
import { useRadio } from "./radio";

export const useTabsList = () => {
  /**
   * @description TabsList
   */
  const TabsList = ref<HTMLElement>();
  const { total, active, isActive } = useRadio(TabsList);

  /**
   * @description list item list style
   */
  const { classList: listItemClassList } = useTemplateClassList(["csss-tabs__list__item"]);

  return {
    total,
    active,
    TabsList,
    isActive,
    listItemClassList,
    ...useTemplateClassList(["csss-tabs__list"]),
  };
};

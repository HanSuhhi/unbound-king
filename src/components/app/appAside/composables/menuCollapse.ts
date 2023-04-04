import { useGlobalStore } from "@/stores/global.store";
import { storeToRefs } from "pinia";
import { useAppAsideStore } from "../store/aside.store";

export const useMenuCollapse = (props: { page: ModulePage }) => {
  const { activeMenuIndex } = storeToRefs(useAppAsideStore());
  const { activePage } = storeToRefs(useGlobalStore());

  const toggleCollapse = () => {
    props.page.collapse = !props.page.collapse;
    if (props.page.collapse) activeMenuIndex.value = activeMenuIndex.value.split("-")[0];
    else activeMenuIndex.value = activePage.value?.key.join("-") || "0";
  };

  return { toggleCollapse };
};

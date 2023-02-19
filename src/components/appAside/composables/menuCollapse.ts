import { useGlobalStore } from "@/stores/global.store";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useAppAsideStore } from "../store/aside.store";

export const useMenuCollapse = () => {
  const isCollapse = ref(false);
  const { activeMenuIndex } = storeToRefs(useAppAsideStore());
  const { activePage } = storeToRefs(useGlobalStore());

  const toggleCollapse = () => {
    isCollapse.value = !isCollapse.value;
    if (isCollapse.value) activeMenuIndex.value = activeMenuIndex.value.split("-")[0];
    else activeMenuIndex.value = activePage.value?.key.join("-") || "0";
  };

  return { isCollapse, toggleCollapse };
};

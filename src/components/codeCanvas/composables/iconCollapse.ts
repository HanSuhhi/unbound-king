import type { ComputedRef, Ref } from "vue";
import { inject, ref } from "vue";

type IconCollapseReturn = [Ref<boolean>, () => void];

export const useIconCollapse = (): IconCollapseReturn => {
  const styles = inject<ComputedRef<UseCsssLayoutProps["style"]>>("layout-style");
  const isCollapse = ref(false);

  const toggle = () => {
    styles!.value!.property!["--aside-width"] = isCollapse.value ? "25%" : "4rem";
    isCollapse.value = !isCollapse.value;
  };

  return [isCollapse, toggle];
};

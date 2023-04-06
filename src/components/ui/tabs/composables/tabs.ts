import { useTemplateClassList } from "../../composables/templateClassList";
import { ref } from "vue";

export function useTabs() {
  const autoTrigger = ref(true);

  return {
    autoTrigger,
    ...useTemplateClassList(["csss-tabs"]),
  };
}

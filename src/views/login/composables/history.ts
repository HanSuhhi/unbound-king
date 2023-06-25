import { ref } from "vue";

export function useUserHistory() {
  const historyDrawer = ref(false);

  return { historyDrawer };
}

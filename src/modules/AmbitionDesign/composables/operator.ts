import type { Ref } from "vue";
import { inject } from "vue";
import { defineUniqueId } from "@/composables/ci/uniqueId";

export function useConfirm() {
  const ambitions = inject<Ref<Array<Ambition>>>("data")!;

  const confirm = (data: Ambition) => {
    const id = defineUniqueId();
    data.id = `A${id}`;
    ambitions.value.push(data);
  };

  return [confirm];
}

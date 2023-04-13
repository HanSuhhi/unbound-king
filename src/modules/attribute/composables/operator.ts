import type { Ref } from "vue";
import { inject } from "vue";

export const useConfirm = () => {
  const attributes = inject<Ref<Array<Attribute>>>("data");
  const confirm = (data: Attribute) => {
    attributes!.value.push(data);
  };

  return [confirm];
};
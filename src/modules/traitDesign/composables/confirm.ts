import { defineUniqueId } from "@/composables/ci/uniqueId";
import { useDesignData } from "@/composables/plus/data";

export function useConfirm() {
  const traits = useDesignData<Trait>();

  const confirm = (data: Trait) => {
    if (!data.translator[1]) data.translator[1] = data.translator[0];
    if (!data.negative) delete data.negative;
    data.id = defineUniqueId("T");
    traits.value.push(data);
  };

  return confirm;
}

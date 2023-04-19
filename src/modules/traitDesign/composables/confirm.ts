import { defineUniqueId } from "@/composables/ci/uniqueId";
import { useDesignData } from "@/composables/plus/data";
import { getInvertGlobalEnumNameOrNot } from "@/enums/global.enum";

export function useConfirm() {
  const traits = useDesignData<Trait>();

  const confirm = (data: Trait) => {
    if (!data.translator[1]) data.translator[1] = data.translator[0];
    data.id = defineUniqueId("T");
    data.from = getInvertGlobalEnumNameOrNot(data.from);
    traits.value.push(data);
  };

  return confirm;
}

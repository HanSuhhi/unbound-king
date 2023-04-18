import type { ComputedRef } from "vue";
import { inject } from "vue";
import { defineUniqueId } from "@/composables/ci/uniqueId";
import { getInvertGlobalEnumNameOrNot } from "@/enums/global.enum";

export function useConfirm() {
  const lineageos = inject<ComputedRef<Array<Lineageo>>>("data")!;

  const confirm = (data: Lineageo) => {
    if (!data.translator[1]) data.translator[1] = data.translator[0];
    data.id = defineUniqueId("LA");
    data.from = getInvertGlobalEnumNameOrNot(data.from);
    lineageos.value.push(data);
  };

  return [confirm];
}

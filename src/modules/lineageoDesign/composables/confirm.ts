import { useDesignData } from "../../../composables/plus/data";
import { defineUniqueId } from "@/composables/ci/uniqueId";
import { getInvertGlobalEnumNameOrNot } from "@/enums/global.enum";

export function useConfirm() {
  const lineageos = useDesignData<Lineageo>();

  const confirm = (data: Lineageo) => {
    if (!data.translator[1]) data.translator[1] = data.translator[0];
    data.id = defineUniqueId("LA");
    data.from = getInvertGlobalEnumNameOrNot(data.from);
    lineageos.value.push(data);
  };

  return [confirm];
}

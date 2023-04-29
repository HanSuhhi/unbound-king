import { useDesignData } from "../../../composables/plus/data";
import { defineUniqueId } from "@/composables/ci/uniqueId";

export function useConfirm() {
  const lineageos = useDesignData<Lineageo>();

  const confirm = (data: Lineageo) => {
    if (!data.translator[1]) data.translator[1] = data.translator[0];
    data.id = defineUniqueId("LA");
    lineageos.value.push(data);
  };

  return [confirm];
}

import { defer, forEach } from "lodash";
import type { ResponseType_PostRegist } from "@/api/services/character";
import { getRegistCharacterTraits } from "@/api/services/traits";
import { transformArrayBufferToString } from "@/composables/trpc/oss";
import { useResourseService } from "@/services/databases/resourse/resourse.service";

export function useTraitOption() {
  const { storeResourse } = useResourseService();

  const getTraits = async () => {
    const { data: { resourse: newTraits } } = await getRegistCharacterTraits({}).send();

    defer(() => forEach(newTraits, storeResourse));
    return newTraits.map(([content]) => transformArrayBufferToString(content.data)) as ResponseType_PostRegist["traits"];
  };

  return {
    getTraits
  };
}

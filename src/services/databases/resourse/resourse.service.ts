import type { Resourse } from "./resourse.table";
import type { ResponseType_GetSupplement } from "@/api/services/editions";
import { transformArrayBufferToBase64, transformArrayBufferToString } from "@/composables/trpc/oss";
import { useServiceModel } from "@/services/serviceModel";

function useVersion1() {
  const { add, update, model } = useServiceModel<Resourse>("resourse");

  const storeResourse = async ([name, { data }, type]: ResponseType_GetSupplement["resourse"][number]) => {
    // if (type !== "image" && type !== "enum") throw new Error(`Invalid type: ${type}`);

    let content = "";
    switch (type) {
      case "image": {
        content = transformArrayBufferToBase64(data);
        break;
      }
      case "enum": {
        content = transformArrayBufferToString(data);
        break;
      }
      default:
        break;
    }
    if (!content) throw new Error(`Invalid type: ${type}`);
    return add({
      name: `${name}-${type}`,
      content,
      type
    });
  };

  return {
    storeResourse
  };
}

export function useResourseService() {
  return useVersion1();
}

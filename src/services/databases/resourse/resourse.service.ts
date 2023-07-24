import type { Resourse } from "./resourse.table";
import type { ResponseType_GetSupplement } from "@/api/services/editions";
import { transformArrayBufferToBase64 } from "@/composables/trpc/oss";
import { useServiceModel } from "@/services/serviceModel";

function useVersion1() {
  const { addWithId, update, model } = useServiceModel<Resourse>("resourse");

  const storeResourse = ([name, buffer, type]: ResponseType_GetSupplement["resourse"][number]) => {
    switch (type) {
      case "image": {
        const content = transformArrayBufferToBase64(buffer);
        return addWithId({
          name,
          content,
          type: "image"
        });
      }
      default:
        break;
    }
  };

  return {
    storeResourse
  };
}

export function useResourseService() {
  return useVersion1();
}

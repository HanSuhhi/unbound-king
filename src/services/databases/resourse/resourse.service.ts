import type { Resourse } from "./resourse.table";
import { useGenderResourse } from "./composables/gender";
import { useProfessionResourse } from "./composables/profession";
import type { ResponseType_GetSupplement } from "@/api/services/editions";
import { transformArrayBufferToBase64, transformArrayBufferToString } from "@/composables/trpc/oss";
import { useServiceModel } from "@/services/serviceModel";

function useVersion1() {
  const { addWithId, update, model } = useServiceModel<Resourse>("resourse");

  async function isResourseRegist(name: ResponseType_GetSupplement["resourse"][number][0], type: ResponseType_GetSupplement["resourse"][number][2]): Promise<Resourse | undefined> {
    return model.where("name").equals(name).first();
  }

  const storeResourse = async ([name, { data }, type]: ResponseType_GetSupplement["resourse"][number], tags?: ResponseType_GetSupplement["tags"]) => {
    let content = "";
    switch (type) {
      case "image": {
        content = transformArrayBufferToBase64(data);
        break;
      }
      case "profession":
      case "race":
      case "trait":
      case "lineage":
      case "gender":
      case "personality": {
        content = transformArrayBufferToString(data);
        break;
      }
      default:
        break;
    }
    if (!content) throw new Error(`Invalid type: ${type}`);
    const oldResourse = await isResourseRegist(name, type);
    const newResourse = {
      name,
      content,
      type,
      tags
    };
    if (!oldResourse) return await addWithId(newResourse);

    newResourse.tags = [...(newResourse.tags || []), ...oldResourse.tags || []];
    await update(oldResourse.id, newResourse);
  };

  return {
    ...useGenderResourse(model),
    ...useProfessionResourse(model),
    storeResourse
  };
}

export function useResourseService() {
  return useVersion1();
}

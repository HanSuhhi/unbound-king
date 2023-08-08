import type { Resourse } from "./resourse.table";
import type { ResponseType_GetSupplement } from "@/api/services/editions";
import { transformArrayBufferToBase64, transformArrayBufferToString } from "@/composables/trpc/oss";
import { useServiceModel } from "@/services/serviceModel";

function defineResourseKey(type: string) {
  return (name: string) => `${type}-${name}`;
}

function useVersion1() {
  const { add, update, model } = useServiceModel<Resourse>("resourse");

  async function isResourseRegist(resourseKey: string): Promise<Resourse | undefined> {
    return (await model.where("name").equals(resourseKey).first());
  }

  const storeResourse = async ([name, { data }, type]: ResponseType_GetSupplement["resourse"][number], tags?: ResponseType_GetSupplement["tags"]) => {
    let content = "";
    switch (type) {
      case "image": {
        content = transformArrayBufferToBase64(data);
        break;
      }
      case "prefession":
      case "trait":
      case "personality": {
        content = transformArrayBufferToString(data);
        break;
      }
      default:
        break;
    }
    if (!content) throw new Error(`Invalid type: ${type}`);
    const resourseKey = defineResourseKey(type)(name);
    const oldResourse = await isResourseRegist(resourseKey);
    const newResourse = {
      name: resourseKey,
      content,
      type,
      tags
    };
    if (!oldResourse) return await add(newResourse);

    newResourse.tags = [...(newResourse.tags || []), ...oldResourse.tags || []];
    update(oldResourse.name, newResourse);
  };

  return {
    storeResourse
  };
}

export function useResourseService() {
  return useVersion1();
}

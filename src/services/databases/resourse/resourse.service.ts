import type { Resourse } from "./resourse.table";
import { useGenderResourse } from "./composables/gender";
import { useProfessionResourse } from "./composables/profession";
import { useTraitResourse } from "./composables/trait";
import { useRaceResourse } from "./composables/race";
import { useLineageResourse } from "./composables/lineage";
import type { ResponseType_GetEditionByTag } from "@/api/services/editions";
import { transformArrayBufferToBase64, transformArrayBufferToString } from "@/composables/trpc/oss";
import { useServiceModel } from "@/services/serviceModel";
import { ResourseType } from "#/server/modules/editions/enums/resourse-type.enum";

function useVersion1() {
  const { addWithId, update, model } = useServiceModel<Resourse>("resourse");

  const storeResourse = async ([{ data }, type, name, tags]: ResponseType_GetEditionByTag["resourse"][number]) => {
    let content = "";
    switch (type) {
      case ResourseType.Image: {
        content = transformArrayBufferToBase64(data);
        break;
      }
      case ResourseType.Profession:
      case ResourseType.Race:
      case ResourseType.Trait:
      case ResourseType.Lineage:
      case ResourseType.Gender: {
        content = transformArrayBufferToString(data);
        break;
      }
      default:
        break;
    }
    if (!content) throw new Error(`Invalid type: ${type}`);
    const oldResourse = await model.get({
      content,
      type
    });
    const newResourse = {
      content,
      type,
      name,
      tags
    };
    if (!oldResourse) return await addWithId(newResourse);
    return await update(oldResourse.id, newResourse);
  };

  return {
    ...useGenderResourse(model),
    ...useProfessionResourse(model),
    ...useTraitResourse(model),
    ...useRaceResourse(model),
    ...useLineageResourse(model),
    storeResourse
  };
}

export function useResourseService() {
  return useVersion1();
}

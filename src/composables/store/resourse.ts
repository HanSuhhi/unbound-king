import { forEach } from "lodash";
import type { ResourseTag } from "#/server/modules/editions/enums/resourse-tag.enum";
import { getEditionByTag } from "@/api/services/editions";
import { useEditionService } from "@/services/databases/edition/edition.service";
import type { Edition } from "@/services/databases/edition/edition.table";
import { useResourseService } from "@/services/databases/resourse/resourse.service";

export function useResourseEdition(resourseTag: ResourseTag, version?: Edition["edition"]) {
  async function storeEditionAndResources() {
    const { addEdition } = useEditionService();
    const { storeResourse } = useResourseService();

    const { data: { edition, editionName, editionNickname, resourse } } = await getEditionByTag({
      params: {
        "resourse-tag": resourseTag,
        "edition": version
      }
    }).send();
    await addEdition(editionName, edition, editionNickname);
    forEach(resourse, storeResourse);
  }

  return { storeEditionAndResources };
}

import type { Edition } from "./edition.table";
import { defineUniqueId } from "@/composables/ci/uniqueId";
import { defineServiceExportFunction, useServiceModel } from "@/services/serviceModel";

function useVersion1() {
  const { add, update, model } = useServiceModel<Edition>("edition");

  async function isEditionRegist(name: string): Promise<Edition | undefined> {
    return (await model.where("name").equals(name).first());
  }

  const checkIfEditionIsRight = defineServiceExportFunction(async (name: string, edition: number): Promise<boolean> => {
    const versionVo = await isEditionRegist(name);
    if (!versionVo) return false;
    return versionVo.edition === edition;
  });

  const addEdition = defineServiceExportFunction(async (name: string, edition: number) => {
    const id = Number(defineUniqueId());
    return await add({
      id,
      name,
      edition
    });
  });

  return {
    checkIfEditionIsRight,
    addEdition
  };
}

export function useEditionService() {
  return useVersion1();
}

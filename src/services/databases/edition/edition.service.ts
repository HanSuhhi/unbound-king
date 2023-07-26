import type { Edition } from "./edition.table";
import { defineServiceExportFunction, useServiceModel } from "@/services/serviceModel";

function useVersion1() {
  const { addWithId, update, model } = useServiceModel<Edition>("edition");

  async function isEditionRegist(name: string): Promise<Edition | undefined> {
    return (await model.where("name").equals(name).first());
  }

  const checkIfEditionIsRight = defineServiceExportFunction(async (name: string, edition: number): Promise<boolean> => {
    const versionVo = await isEditionRegist(name);
    if (!versionVo) return false;
    return versionVo.edition === edition;
  });

  const addEdition = defineServiceExportFunction(async (name: string, edition: number) => {
    return await addWithId({
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

import type { Edition } from "./edition.table";
import { ResourseTag } from "#/server/modules/editions/enums/resourse-tag.enum";
import { defineServiceExportFunction, useServiceModel } from "@/services/serviceModel";

function useVersion1() {
  const { addWithId, update, model } = useServiceModel<Edition>("edition");

  async function isEditionRegist(name: string): Promise<Edition | undefined> {
    return (await model.where("name").equals(name).first());
  }

  const getInitEditionVersion = defineServiceExportFunction(async () => {
    return await isEditionRegist(ResourseTag.Init);
  });

  const getRegistCharacterVersion = defineServiceExportFunction(async () => {
    return await isEditionRegist(ResourseTag.RegistCharacter);
  });

  const addEdition = defineServiceExportFunction(async (name: string, edition: number, nickname = "") => {
    const isRegist = (await isEditionRegist(name));
    if (isRegist) return await update(isRegist.id, { edition, nickname });
    return await addWithId({
      name,
      edition
    });
  });

  return {
    getInitEditionVersion,
    getRegistCharacterVersion,
    addEdition
  };
}

export function useEditionService() {
  return useVersion1();
}

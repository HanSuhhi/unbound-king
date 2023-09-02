import type { Edition } from "./edition.table";
import { defineServiceExportFunction, useServiceModel } from "@/services/serviceModel";

function useVersion1() {
  const { addWithId, update, model } = useServiceModel<Edition>("edition");

  const getVerifyEditions = defineServiceExportFunction(async () => {
    const ediitons = await model.toArray();

    const result: Record<Edition["name"], Edition["id"]> = {};
    for (const { name, edition } of ediitons) result[name] = edition;

    return result;
  })!;

  async function isEditionRegist(name: string): Promise<Edition | undefined> {
    return (await model.where("name").equals(name).first());
  }

  const addEdition = defineServiceExportFunction(async (name: string, edition: number, nickname = "") => {
    const isRegist = (await isEditionRegist(name));
    if (isRegist) return await update(isRegist.id, { edition, nickname });
    return await addWithId({
      name,
      edition
    });
  });

  return {
    getVerifyEditions,
    addEdition
  };
}

export function useEditionService() {
  return useVersion1();
}

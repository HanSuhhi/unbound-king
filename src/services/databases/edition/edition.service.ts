import type { Version } from "./edition.table";
import { defineServiceExportFunction, useServiceModel } from "@/services/serviceModel";

function useVersion1() {
  const { add, update, model } = useServiceModel<Version>("edition");

  async function isVersionRegist(name: string): Promise<Version | undefined> {
    return (await model.where("name").equals(name).first());
  }

  const checkIfVersionIsRight = defineServiceExportFunction(async (name: string, version: number): Promise<boolean> => {
    const versionVo = await isVersionRegist(name);
    if (!versionVo) return false;
    return versionVo.version === version;
  });

  return {
    checkIfVersionIsRight
  };
}

export function useVersionService() {
  return useVersion1();
}

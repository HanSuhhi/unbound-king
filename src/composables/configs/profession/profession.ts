import { Gender } from "@/configs/gender/gender.enum";
import { ElvesLineage, HumanLineage, YokaiLineage } from "@/configs/lineages/lineages.enum";
import { professionFrom } from "@/configs/professions/profession-from";
import { Profession } from "@/configs/professions/profession.enum";
import { defineServiceExportFunction } from "@/services/serviceModel";

export function useProfession() {
  const getProfessionWhenRegistCharacter = defineServiceExportFunction(({ gender: userGender, lineage: userLineage }: RegistCharacterQueryDto) => {
    const professions: Set<Profession> = new Set();
    professionFrom.forEach(([profession, lineage, gender]) => {
      const targetLineage = HumanLineage[lineage as keyof typeof HumanLineage]
        || YokaiLineage[lineage as keyof typeof YokaiLineage]
        || ElvesLineage[lineage as keyof typeof ElvesLineage];
      if (targetLineage !== userLineage) return;
      if (!gender || Gender[gender as keyof typeof Gender] === userGender) professions.add(Profession[profession as keyof typeof Profession]);
    });

    return { professions: Array.from(professions) } as RegistCharacterProfessionVo;
  });

  return {
    getProfessionWhenRegistCharacter
  };
}

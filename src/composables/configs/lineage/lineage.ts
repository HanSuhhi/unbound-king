import { ElvesLineage, HumanLineage, YokaiLineage } from "@/configs/lineages/lineages.enum";
import { Race } from "@/configs/races/race.enum";
import { ErrorTag } from "@/enums/error-tag.enum";

export function useLineageService() {
  const getRaceFromLineage = (lineage: Lineages): Race => {
    if (Object.values(HumanLineage).includes(lineage as HumanLineage)) return Race.Human;
    if (Object.values(YokaiLineage).includes(lineage as YokaiLineage)) return Race.Yokai;
    if (Object.values(ElvesLineage).includes(lineage as ElvesLineage)) return Race.Elves;

    throw new Error(ErrorTag.NotFound);
  };

  /**
   * Determines whether the given lineage belongs to the given race.
   * @param {Race} race The race to check.
   * @param {Lineages} lineage The lineage to check.
   * @returns {boolean} True if the lineage belongs to the race, False otherwise.
   */
  const isLineageBelongToRace = (race: Race, lineage: Lineages): boolean => {
    const targetRace = getRaceFromLineage(lineage);
    return targetRace === race;
  };

  return {
    isLineageBelongToRace,
    getRaceFromLineage
  };
}

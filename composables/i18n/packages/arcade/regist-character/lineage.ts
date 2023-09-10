import { ElvesLineage, HumanLineage, YokaiLineage } from "#/server/modules/lineages/enums/lineage.enum";

export const EN_Lineage = {
  [HumanLineage.Caveman]: "caveman",
  [YokaiLineage.Fish]: "fish",
  [ElvesLineage.Tree]: "tree"
};

export const CN_Lineage = {
  [HumanLineage.Caveman]: "穴居人",
  [YokaiLineage.Fish]: "鱼妖",
  [ElvesLineage.Tree]: "树精"
};

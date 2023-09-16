import { ElvesLineage, HumanLineage, YokaiLineage } from "#/server/modules/lineages/enums/lineage.enum";

export const EN_Lineage = {
  [HumanLineage.Caveman]: "caveman",
  [HumanLineage.PlainSettler]: "plain settler",
  [YokaiLineage.Fish]: "fish",
  [ElvesLineage.Tree]: "tree"
};

export const CN_Lineage = {
  [HumanLineage.Caveman]: "穴居人",
  [HumanLineage.PlainSettler]: "平原聚居者",
  [YokaiLineage.Fish]: "鱼妖",
  [ElvesLineage.Tree]: "树精"
};

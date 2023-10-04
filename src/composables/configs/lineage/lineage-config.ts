import { ElvesLineage, HumanLineage, YokaiLineage } from "@/configs/lineages/lineages.enum";

export function useLineageConfig() {
  const REGIST_LINEAGES: Lineages[] = [
    HumanLineage.ForestNative,
    HumanLineage.PlainSettler,
    YokaiLineage.Fish,
    ElvesLineage.Tree
  ];

  return {
    REGIST_LINEAGES
  };
}

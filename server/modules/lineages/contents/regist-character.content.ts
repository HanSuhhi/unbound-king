import { ElvesLineage, HumanLineage, YokaiLineage } from "../enums/lineages.enum";
import type { Lineages } from "../lineage-type";

export const REGIST_CHARACTER_RESOURSE: Array<Lineages> = [
  HumanLineage.ForestNative,
  HumanLineage.PlainSettler,
  ElvesLineage.Tree,
  YokaiLineage.Fish
];

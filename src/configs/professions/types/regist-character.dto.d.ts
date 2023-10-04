interface RegistCharacterQueryDto {
  readonly gender: Gender.Male | Gender.Female
  readonly lineage: HumanLineage.ForestNative | HumanLineage.PlainSettler | YokaiLineage.Fish | ElvesLineage.Tree
}


interface Character extends ITable {
  name: string;
  gender: Gender;
  profession: Profession;
  traits: [Trait, Trait];
  race: Race;
  lineage: Lineages;
}

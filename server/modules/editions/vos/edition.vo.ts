import { ApiEditionProperty } from "../decorators/ApiEditionProperty";
import { Edition } from "../edition-type";
import { ProfessionType } from "@/modules/professions/enums/profession-type.enum";
import { AssetType } from "@/modules/assets/enums/asset-type.enum";
import { TraitType } from "@/modules/traits/enums/trait-type.enum";
import { RaceType } from "@/modules/races/enums/race-type.enum";
import { LineageType } from "@/modules/lineages/enums/lineage-type.enum";
import { GenderType } from "@/modules/gender/enums/gender-type.enum";

export class EditionVo {
  @ApiEditionProperty()
  [AssetType.StandardIcon]: Edition;

  @ApiEditionProperty()
  [ProfessionType.RegistCharacter]: Edition;

  @ApiEditionProperty()
  [TraitType.RegistCharacter]: Edition;

  @ApiEditionProperty()
  [RaceType.RaceList]: Edition;

  @ApiEditionProperty()
  [RaceType.RegistCharacter]: Edition;

  @ApiEditionProperty()
  [LineageType.RegistCharacter]: Edition;

  @ApiEditionProperty()
  [GenderType.RegistCharacter]: Edition;
}

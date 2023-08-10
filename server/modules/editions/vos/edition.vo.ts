import { ApiEditionProperty } from "../decorators/ApiEditionProperty";
import { Edition } from "../edition-type";
import { ProfessionType } from "@/modules/professions/enums/profession-type.enum";
import { AssetType } from "@/modules/assets/enums/asset-type.enum";
import { PersonalityType } from "@/modules/personalities/enums/personality-type.enum";
import { TraitType } from "@/modules/traits/enums/trait-type.enum";
import { RaceType } from "@/modules/races/enums/race-type.enum";

export class EditionVo {
  @ApiEditionProperty()
  [AssetType.StandardIcon]: Edition;

  @ApiEditionProperty()
  [ProfessionType.RegistCharacter]: Edition;

  @ApiEditionProperty()
  [PersonalityType.RegistCharacter]: Edition;

  @ApiEditionProperty()
  [TraitType.RegistCharacter]: Edition;

  @ApiEditionProperty()
  [RaceType.RaceList]: Edition;
}

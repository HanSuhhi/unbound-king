import { ApiResourseProperty } from "../decorators/ApiResourseProperty";
import { ResourseVo } from "./resourse.vo";
import { ProfessionType } from "@/modules/professions/enums/profession-type.enum";
import { AssetType } from "@/modules/assets/enums/asset-type.enum";
import { PersonalityType } from "@/modules/personalities/enums/personality-type.enum";
import { TraitType } from "@/modules/traits/enums/trait-type.enum";
import { RaceType } from "@/modules/races/enums/race-type.enum";
import { LineageType } from "@/modules/lineages/enums/lineage-type.enum";
import { GenderType } from "@/modules/gender/enums/gender-type.enum";

export class VerifyVo {
  @ApiResourseProperty()
  [AssetType.StandardIcon]: ResourseVo;

  @ApiResourseProperty()
  [ProfessionType.RegistCharacter]: ResourseVo;

  @ApiResourseProperty()
  [PersonalityType.RegistCharacter]: ResourseVo;

  @ApiResourseProperty()
  [TraitType.RegistCharacter]: ResourseVo;

  @ApiResourseProperty()
  [RaceType.RaceList]: ResourseVo;

  @ApiResourseProperty()
  [RaceType.RegistCharacter]: ResourseVo;

  @ApiResourseProperty()
  [LineageType.RegistCharacter]: ResourseVo;

  @ApiResourseProperty()
  [GenderType.RegistCharacter]: ResourseVo;
}

import { ApiProperty } from "@nestjs/swagger";
import type { ResourseVo } from "../vos/resourse.vo";
import { ProfessionType } from "@/modules/professions/enums/profession-type.enum";
import { AssetType } from "@/modules/assets/enums/asset-type.enum";
import { PersonalityType } from "@/modules/personalities/enums/personality-type.enum";
import { TraitType } from "@/modules/traits/enums/trait-type.enum";
import { RaceType } from "@/modules/races/enums/race-type.enum";
import { LineageType } from "@/modules/lineages/enums/lineage-type.enum";
import { GenderType } from "@/modules/gender/enums/gender-type.enum";

export class VerifyDto {
  @ApiProperty({
    required: false,
    type: Number
  })
  [AssetType.StandardIcon]: ResourseVo["edition"];

  @ApiProperty({
    required: false,
    type: Number
  })
  [ProfessionType.RegistCharacter]: ResourseVo["edition"];

  @ApiProperty({
    required: false,
    type: Number
  })
  [PersonalityType.RegistCharacter]: ResourseVo["edition"];

  @ApiProperty({
    required: false,
    type: Number
  })
  [TraitType.RegistCharacter]: ResourseVo["edition"];

  @ApiProperty({
    required: false,
    type: Number
  })
  [RaceType.RaceList]: ResourseVo["edition"];

  @ApiProperty({
    required: false,
    type: Number
  })
  [RaceType.RegistCharacter]: ResourseVo["edition"];

  @ApiProperty({
    required: false,
    type: Number
  })
  [LineageType.RegistCharacter]: ResourseVo["edition"];

  @ApiProperty({
    required: false,
    type: Number
  })
  [GenderType.RegistCharacter]: ResourseVo["edition"];
}

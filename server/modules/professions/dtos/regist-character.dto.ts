import { IsIn } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { GenderService } from "@/modules/gender/gender.service";
import { LineagesService } from "@/modules/lineages/lineages.service";

export class RegistCharacterQueryDto {
  @IsIn(GenderService.REGIST_CHARACTER_RESOURSE)
  @ApiProperty({
    required: true,
    default: GenderService.REGIST_CHARACTER_RESOURSE[0],
    type: String
  })
  readonly gender: typeof GenderService.REGIST_CHARACTER_RESOURSE[number];

  @IsIn(LineagesService.REGIST_CHARACTER_RESOURSE)
  @ApiProperty({
    required: true,
    default: LineagesService.REGIST_CHARACTER_RESOURSE[0],
    type: String
  })
  readonly lineage: typeof LineagesService.REGIST_CHARACTER_RESOURSE[number];
}

import { IsEnum } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Profession } from "../enums/profession.enum";

export class RegistCharacterProfessionVo {
  @IsEnum(Profession, { each: true })
  @ApiProperty({
    required: true,
    isArray: true,
    enum: Profession
  })
  readonly professions: Profession[];
}

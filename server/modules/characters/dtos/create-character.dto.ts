import { ApiProperty } from "@nestjs/swagger";
import { IsEnum } from "class-validator";
import { StringValidator } from "@/decorators/validate/string.validator";
import { Gender } from "@/enums/gender.enum";
import { StringEnumValidator } from "@/decorators/validate/string-enum.validate";
import { Profession } from "@/modules/professions/enums/profession.enum";
import { Personality } from "@/modules/personalities/enums/personality.enum";
import { Trait } from "@/modules/traits/enums/trait.enum";
import { ApiStringEnumProperty } from "@/decorators/api/apiStringEnumProperty.decorator";

export class CreateCharacterDto {
  @StringValidator()
  @ApiProperty({
    required: true,
    default: "",
    type: String
  })
  readonly name: string;

  @StringEnumValidator(Gender)
  @ApiProperty({
    default: Gender.Male,
    enum: Gender,
    type: String
  })
  readonly gender: Gender;

  @ApiStringEnumProperty(Profession)
  readonly profession: Profession;

  @ApiStringEnumProperty(Personality)
  readonly personality: Personality;

  @IsEnum(Trait, { each: true })
  @ApiProperty({
    required: true,
    enum: Trait,
    type: Array
  })
  readonly traits: Trait[];
}

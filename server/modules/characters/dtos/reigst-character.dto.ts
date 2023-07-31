import { ApiProperty } from "@nestjs/swagger";
import { IsEnum } from "class-validator";
import { StringValidator } from "@/decorators/validate/string.validator";
import { Gender } from "@/modules/gender/enums/gender.enum";
import { StringEnumValidator } from "@/decorators/validate/string-enum.validate";
import { Profession } from "@/modules/professions/enums/profession.enum";
import { Personality } from "@/modules/personalities/enums/personality.enum";
import { Trait } from "@/modules/traits/enums/trait.enum";

export class RegistCharacterDto {
  @StringValidator()
  @ApiProperty({
    required: true,
    default: "",
    type: String
  })
  readonly name: string;

  @StringEnumValidator(Gender)
  @ApiProperty({
    required: true,
    default: Gender.Male,
    enum: Gender,
    type: String
  })
  readonly gender: Gender;

  @StringEnumValidator(Profession)
  @ApiProperty({
    required: true,
    enum: Profession,
    type: String
  })
  readonly profession: Profession;

  @StringEnumValidator(Personality)
  @ApiProperty({
    required: true,
    enum: Personality,
    type: String
  })
  readonly personality: Personality;

  @IsEnum(Trait, { each: true })
  @ApiProperty({
    required: true,
    enum: Trait,
    type: Array,
    default: [Trait.Listener]
  })
  readonly traits: Trait[];
}

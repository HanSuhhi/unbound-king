import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, MaxLength, MinLength } from "class-validator";
import { StringValidator } from "@/decorators/validate/string.validator";
import { Gender } from "@/modules/gender/enums/gender.enum";
import { StringEnumValidator } from "@/decorators/validate/string-enum.validate";
import { Profession } from "@/modules/professions/enums/profession.enum";
import { Trait } from "@/modules/traits/enums/trait.enum";
import { ElvesLineage, HumanLineage, YokaiLineage } from "@/modules/lineages/enums/lineage.enum";
import { Race } from "@/modules/races/enums/race.enum";
import { i18nLangModel } from "#/composables/i18n";

export class RegistCharacterDto {
  @StringValidator()
  @MaxLength(6, {
    message() {
      return i18nLangModel.validate.characterName;
    }
  })
  @MinLength(2, {
    message() {
      return i18nLangModel.validate.characterName;
    }
  })
  @ApiProperty({
    required: true,
    maxLength: 6,
    minLength: 2,
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

  @IsEnum(Trait, { each: true })
  @ApiProperty({
    required: true,
    enum: Trait,
    type: Array,
    isArray: true,
    default: [Trait.Listener]
  })
  readonly traits: Trait[];

  @StringEnumValidator(Race)
  @ApiProperty({
    required: true,
    type: String,
    enum: Race
  })
  race: Race;

  @StringEnumValidator({ ...HumanLineage, ...YokaiLineage, ...ElvesLineage })
  @ApiProperty({
    required: true,
    type: String,
    enum: { ...HumanLineage, ...YokaiLineage, ...ElvesLineage }
  })
  lineage: HumanLineage | YokaiLineage | ElvesLineage;
}

import { ApiProperty } from "@nestjs/swagger";
import { IsEnum } from "class-validator";
import { StringValidator } from "@/decorators/validate/string.validator";
import { Gender } from "@/modules/gender/enums/gender.enum";
import { StringEnumValidator } from "@/decorators/validate/string-enum.validate";
import { Profession } from "@/modules/professions/enums/profession.enum";
import { Trait } from "@/modules/traits/enums/trait.enum";
import { ElvesLineage, HumanLineage, YokaiLineage } from "@/modules/lineages/enums/lineage.enum";
import { Race } from "@/modules/races/enums/race.enum";

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
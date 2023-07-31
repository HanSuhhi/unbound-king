import { ApiProperty } from "@nestjs/swagger";
import { Gender } from "@/modules/gender/enums/gender.enum";
import { Profession } from "@/modules/professions/enums/profession.enum";
import { Personality } from "@/modules/personalities/enums/personality.enum";
import { Trait } from "@/modules/traits/enums/trait.enum";

export class RegistCharacterVo {
  @ApiProperty({
    required: true,
    default: "",
    type: String
  })
  readonly name: string;

  @ApiProperty({
    required: true,
    default: Gender.Male,
    enum: Gender,
    type: String
  })
  readonly gender: Gender;

  @ApiProperty({
    required: true,
    enum: Profession,
    type: String
  })
  readonly profession: Profession;

  @ApiProperty({
    required: true,
    enum: Personality,
    type: String
  })
  readonly personality: Personality;

  @ApiProperty({
    required: true,
    enum: Trait,
    type: Array,
    default: [Trait.Listener]
  })
  readonly traits: Trait[];
}

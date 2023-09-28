import { ApiProperty } from "@nestjs/swagger";
import { StringValidator } from "@/decorators/validate/string.validator";

export class RemoveCharacterDto {
  @StringValidator()
  @ApiProperty({
    required: true,
    type: String,
    description: "character id"
  })
  readonly id: string;
}

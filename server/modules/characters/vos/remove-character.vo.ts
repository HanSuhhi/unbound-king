import { ApiProperty } from "@nestjs/swagger";
import { RemoveResponse } from "@/enums/remove-response.enum";

export class RemoveCharacterVo {
  @ApiProperty({
    required: true,
    default: RemoveResponse.Success,
    type: Number
  })
  readonly state: RemoveResponse;

  @ApiProperty({
    required: false,
    type: String
  })
  readonly message?: string;
}

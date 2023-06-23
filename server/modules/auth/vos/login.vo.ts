import { ApiProperty } from "@nestjs/swagger";
import { Authority } from "#/composables/constant/response";

export class LoginVo {
  @ApiProperty({
    type: String,
    required: false,
    description: "access token"
  })
  [Authority.TOKEN]?: string;
}

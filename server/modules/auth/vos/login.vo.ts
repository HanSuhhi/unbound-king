import { ApiProperty } from "@nestjs/swagger";
import type { Role } from "#/composables/enum/role.enum";

export class LoginVo {
  @ApiProperty({
    type: String,
    required: false,
    description: "access token"
  })
  access_token: string;

  @ApiProperty({
    type: Object,
    required: true,
    description: "user roles"
  })
  roles: Role[];
}

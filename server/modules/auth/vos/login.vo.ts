import { ApiProperty } from "@nestjs/swagger";
import { Role } from "#/composables/enum/role.enum";

export class LoginVo {
  @ApiProperty({
    type: String,
    required: true,
    description: "access token"
  })
  access_token: string;

  @ApiProperty({
    type: Array,
    enum: Role,
    required: true,
    isArray: true,
    description: "user roles"
  })
  roles: Role[];

  @ApiProperty({
    type: String,
    required: true,
    description: "user nickname"
  })
  nickname: string;
}

import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserNicknameByEmailVo {
  @ApiProperty({
    type: String,
    required: true,
    description: "The user's modified nickname"
  })
  nickname: string;
}

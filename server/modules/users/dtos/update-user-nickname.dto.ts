import { ApiProperty } from "@nestjs/swagger";
import { NicknameValidator } from "../validates/nickname.validator";

export class UpdateUserNicknameByEmailDto {
  @NicknameValidator()
  @ApiProperty({
    required: true,
    maxLength: 8,
    type: String
  })
  nickname: string;
}

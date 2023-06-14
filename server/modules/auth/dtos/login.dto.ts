import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsNumber } from "class-validator";

export class loginDto {
  @IsEmail()
  @ApiProperty({
    required: true,
    default: "l_98b@outlook.com",
    type: String
  })
  readonly email: string;

  @IsNumber()
  @ApiProperty({
    required: true,
    default: 111_111,
    type: Number
  })
  readonly code: number;

  @IsBoolean()
  @ApiProperty({
    required: false,
    default: false,
    type: Boolean
  })
  readonly autoRegisterConsent?: boolean;
}

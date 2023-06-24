import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { LoginRegistration } from "../../../../composables/constant/request";
import { EmailValidate } from "@/decorators/validate/email.decorator";
import { NumberValidate } from "@/decorators/validate/number.decorator";
import { StringValidate } from "@/decorators/validate/string.decorator";
import { EnumValidate } from "@/decorators/validate/enum.decorator";

export class LoginDto {
  @EmailValidate()
  @ApiProperty({
    required: true,
    default: "l_98b@outlook.com",
    type: String
  })
  @Transform(({ value }) => value.toLowerCase().trim())
  readonly email: string;

  @NumberValidate()
  @ApiProperty({
    required: true,
    default: 111_111,
    type: Number
  })
  readonly code: number;

  @StringValidate()
  @EnumValidate(LoginRegistration)
  @ApiProperty({
    default: LoginRegistration.LOGIN,
    enum: LoginRegistration,
    type: String
  })
  readonly loginType: LoginRegistration;
}

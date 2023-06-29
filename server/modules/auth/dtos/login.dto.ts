import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { LoginRegistration } from "../../../../composables/constant/request";
import { EmailValidator } from "@/decorators/validate/email.validator";
import { NumberValidator } from "@/decorators/validate/number.validator";
import { StringValidator } from "@/decorators/validate/string.validator";
import { EnumValidator } from "@/decorators/validate/enum.validator";

export class LoginDto {
  @EmailValidator()
  @ApiProperty({
    required: true,
    default: "l_98b@outlook.com",
    type: String
  })
  @Transform(({ value }) => value.toLowerCase().trim())
  readonly email: string;

  @NumberValidator()
  @ApiProperty({
    required: true,
    default: 111_111,
    type: Number
  })
  readonly code: number;

  @StringValidator()
  @EnumValidator(LoginRegistration)
  @ApiProperty({
    default: LoginRegistration.LOGIN,
    enum: LoginRegistration,
    type: String
  })
  readonly loginType: LoginRegistration;
}

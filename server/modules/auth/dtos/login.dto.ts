import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsNumber, IsString } from "class-validator";
import { LoginRegistration } from "../../../../composables/constant/request";
import { invalid } from "../../../composables/exceptions/Invalid";

export class LoginDto {
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

  @IsString()
  @IsEnum(LoginRegistration, {
    message() {
      return invalid("login type");
    }
  })
  @ApiProperty({
    default: LoginRegistration.LOGIN,
    enum: LoginRegistration,
    type: String
  })
  readonly loginType: LoginRegistration;
}

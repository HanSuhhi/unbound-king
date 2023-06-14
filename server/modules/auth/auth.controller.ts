import { BadRequestException, Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { isUndefined } from "lodash";
import { AuthService } from "./auth.service";
import { loginDto } from "./dtos/login.dto";
import { invalid } from "@/composables/exceptions/Invalid";

@ApiTags("🔒 Auth")
@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @Post("login-email")
  @ApiOperation({ summary: "User Registration / Login" })
  async loginWithEmail(@Body() loginFormDto: loginDto) {
    const { autoRegisterConsent, email } = loginFormDto;
    if (isUndefined(autoRegisterConsent)) {
      // const result = await this.authService.isAccountRegistered(email);
      // console.log("result: ", result);
      // check if user is already registered

      // true: login
      // false: return enum that the user needs to register
    }
    else if (autoRegisterConsent === true) {
    // register

    }
    else {
      throw new BadRequestException(invalid());
    }
  }
}

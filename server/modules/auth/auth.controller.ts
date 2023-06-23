import { BadRequestException, Body, Controller, Post } from "@nestjs/common";
import { ApiAcceptedResponse, ApiBadRequestResponse, ApiCreatedResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dtos/login.dto";
import { Public } from "./decorators/auth.decorator";
import { LoginVo } from "./vos/login.vo";
import { LoginRegistration } from "#/composables/constant/request";
import { useApiOperationDescriptionEnum } from "@/composables/api/description";
import { invalid } from "#/composables/i18n/composable";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @Post("login-email")
  @ApiOperation({
    summary: "User Registration / Login",
    description: useApiOperationDescriptionEnum("loginType", LoginRegistration)
  })
  @ApiBadRequestResponse({
    description: invalid("props")
  })
  @ApiUnauthorizedResponse({
    description: invalid("authentication code")
  })
  @ApiAcceptedResponse({
    description: "login: user not exists"
  })
  @ApiCreatedResponse({
    description: "User registration / login success",
    type: LoginVo
  })
  @Public()
  async loginWithEmail(@Body() loginFormDto: LoginDto) {
    switch (loginFormDto.loginType) {
      case LoginRegistration.LOGIN:
        return await this.authService.login(loginFormDto);
      case LoginRegistration.REGISTRATION:
        return await this.authService.register(loginFormDto);
      default:
        throw new BadRequestException(invalid("loginType"));
    }
  }
}

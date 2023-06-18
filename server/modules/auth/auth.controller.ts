import { BadRequestException, Body, Controller, Post } from "@nestjs/common";
import { ApiAcceptedResponse, ApiBadRequestResponse, ApiCreatedResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dtos/login.dto";
import { Public } from "./decorators/auth.decorator";
import { LoginResponseDto } from "./dtos/login-response.dto";
import { LoginRegistration } from "#/composables/constant/request";
import { invalid } from "@/composables/exceptions/Invalid";
import { useApiOperationDescriptionEnum } from "@/composables/api/description";

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
    description: invalid("login type")
  })
  @ApiUnauthorizedResponse({
    description: invalid("authentication code")
  })
  @ApiAcceptedResponse({
    description: "login: user not exists"
  })
  @ApiCreatedResponse({
    description: "User registration / login success",
    type: LoginResponseDto
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

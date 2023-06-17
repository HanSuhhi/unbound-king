import { BadRequestException, Body, Controller, Post, UseInterceptors } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dtos/login.dto";
import { Public } from "./decorators/auth.decorator";
import { ThrottlerInterceptor } from "@/interceptors/throttler.interceptor";
import { LoginRegistration } from "#/composables/constant/request";
import { invalid } from "@/composables/exceptions/Invalid";
import { useApiOperationDescriptionEnum } from "@/composables/api/description";

@ApiTags("🔒 Auth")
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
  @UseInterceptors(ThrottlerInterceptor)
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

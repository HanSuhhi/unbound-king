import { Controller, Get, UseInterceptors } from "@nestjs/common";
import { ApiBadGatewayResponse, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { AppService } from "./app.service";
import { ThrottlerInterceptor } from "./interceptors/throttler.interceptor";

@ApiTags()
@Controller()
@UseInterceptors(ThrottlerInterceptor)
@ApiBadGatewayResponse({ description: "Rate limit exceeded" })
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get(["", "v1"])
  @ApiOperation({
    summary: "🔧 A get test interface",
    description: "hello world"
  })
  @ApiOkResponse({
    status: 200,
    type: String
  })
  public hello() {
    return "👋 hello, my friends";
  }
}

import { Controller, Get } from "@nestjs/common";
import { ApiBadGatewayResponse, ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { AppService } from "./app.service";

@ApiTags()
@Controller()
@ApiBadGatewayResponse({ description: "Rate limit exceeded" })
@ApiBearerAuth()
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

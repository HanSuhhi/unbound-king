import { Controller, Get } from "@nestjs/common";
import { ApiBadGatewayResponse, ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { AppService } from "./app.service";
import { Roles } from "./modules/roles/roles.decorator";
import { Role } from "./modules/roles/enum/role.enum";

@ApiTags()
@Controller()
@ApiBadGatewayResponse({ description: "Rate limit exceeded" })
@Roles(Role.Player)
@ApiBearerAuth()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get(["", "v1"])
  // @Public()
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

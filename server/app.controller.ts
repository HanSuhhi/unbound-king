import { Controller, Get, UseGuards } from "@nestjs/common";
import { ApiBadGatewayResponse, ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { AppService } from "./app.service";
import { CheckPolicies } from "./modules/casl/decorators/casl.decorator";
import { PoliciesGuard } from "./modules/casl/guards/policies.guard";
import { Action } from "./modules/casl/enums/casl.enum";

@ApiTags()
@Controller()
@ApiBadGatewayResponse({ description: "Rate limit exceeded" })
@ApiBearerAuth()
export class AppController {
  constructor(
    private readonly appService: AppService
  ) { }

  @Get(["", "v1"])
  @ApiOperation({
    summary: "🔧 A get test interface",
    description: "hello world"
  })
  @ApiOkResponse({
    status: 200,
    type: String
  })
  public hi() {
    return "👋 hello, my friends";
  }

  @Get("test")
  @UseGuards(PoliciesGuard)
  @CheckPolicies(ability => ability.can(Action.Delete, "all"))
  public hello() {
    return "just a test.";
  }
}

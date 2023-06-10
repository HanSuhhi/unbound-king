import { Controller, Get } from "@nestjs/common";
import { ApiDefaultResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { Prefix } from "../composables/constant/url";
import { AppService } from "./app.service";

@ApiTags()
@Controller(Prefix.Server_1)
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @ApiOperation({
    summary: "🔧 A get test interface",
    description: "hello world"
  })
  @ApiDefaultResponse({
    status: 200,
    type: String
  })
  public hello() {
    return "👋 hello, my friends";
  }
}

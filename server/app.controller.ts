import { Controller, Get } from "@nestjs/common";
import { ApiDefaultResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { AppService } from "./app.service";

@ApiTags()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get(["", "v1"])
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

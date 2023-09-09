import { Controller, Get } from "@nestjs/common";
import { ApiBearerAuth, ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { OnlyResourseVo } from "../editions/vos/resourse.vo";
import { Public } from "../auth/decorators/auth.decorator";
import { TraitsService } from "./traits.service";

@ApiTags("Traits")
@Controller("traits")
@ApiBearerAuth()
export class TraitsController {
  constructor(
    private readonly traitsService: TraitsService
  ) { }

  @Public()
  @Get("regist-character")
  @ApiOperation({
    summary: "get 2 traits when user regist character"
  })
  @ApiCreatedResponse({
    description: "Obtain client version information and update it",
    type: OnlyResourseVo
  })
  public registCharacterTraits(): OnlyResourseVo {
    return this.traitsService.sampleRegistCharacterTraits();
  }
}

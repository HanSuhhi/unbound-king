import { Controller, Get } from "@nestjs/common";
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { EditionsService } from "./editions.service";
import { EditionVo } from "./vos/edition.vo";

@ApiTags("Editions")
@Controller("editions")
@ApiBearerAuth()
export class EditionsController {
  constructor(private readonly edtionsService: EditionsService) { }

  @Get("editions")
  @ApiOperation({
    summary: "Get all resource edtion numbers",
    description: "Get the edtion numbers of all resources to compare with the local cache resources."
  })
  @ApiOkResponse({
    status: 200,
    type: EditionVo
  })
  public editions() {
    return this.edtionsService.getEditions();
  }
}

import { Controller, Get } from "@nestjs/common";
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { VersionsService } from "./versions.service";
import { VersionVo } from "./vos/version.vo";

@ApiTags("Versions")
@Controller("versions")
@ApiBearerAuth()
export class VersionsController {
  constructor(private readonly versionsService: VersionsService) { }

  @Get("versions")
  @ApiOperation({
    summary: "Get all resource version numbers",
    description: "Get the version numbers of all resources to compare with the local cache resources."
  })
  @ApiOkResponse({
    status: 200,
    type: VersionVo
  })
  public versions() {
    return this.versionsService.getVersions();
  }
}

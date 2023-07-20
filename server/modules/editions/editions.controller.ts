import { Controller, Get, Query } from "@nestjs/common";
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { Public } from "../auth/decorators/auth.decorator";
import { AssetType } from "../assets/enums/asset-type.enum";
import { EditionsService } from "./editions.service";
import { EditionVo } from "./vos/edition.vo";
import { ApiEditionTypeQuery } from "./queries/edition-type.query";
import { ResourseVo } from "./vos/resourse.vo";
import { useApiOperationDescriptionEnum } from "@/composables/api/description";

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

  @Get("supplement")
  @Public()
  @ApiEditionTypeQuery()
  @ApiOperation({
    summary: "Get the resource content of the differential edition",
    description: `${useApiOperationDescriptionEnum("asset-sub-type", AssetType)}`
  })
  @ApiOkResponse({
    type: ResourseVo
  })
  public supplement(
    @Query("edition-type") editionType: keyof EditionVo
  ) {
    return this.edtionsService.supplement(editionType);
  }
}

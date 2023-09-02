import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { AssetType } from "../assets/enums/asset-type.enum";
import { EditionsService } from "./editions.service";
import { EditionVo } from "./vos/edition.vo";
import { ResourseVo } from "./vos/resourse.vo";
import { VerifyVo } from "./vos/verify.vo";
import { VerifyDto } from "./dtos/verify.dto";
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

  @Post("verify")
  @ApiOperation({
    summary: "Get the resource content of the differential edition"
  })
  @ApiCreatedResponse({
    description: "Obtain client version information and update it",
    type: VerifyVo
  })
  public verify(@Body() verifyDto: VerifyDto) {
    return this.edtionsService.verify(verifyDto);
  }
}

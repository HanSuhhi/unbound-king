import { Controller, Get, Query } from "@nestjs/common";
import { ApiBearerAuth, ApiCreatedResponse, ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";
import { assign } from "lodash";
import { EditionsService } from "./editions.service";
import { ResourseTag } from "./enums/resourse-tag.enum";
import type { Edition } from "./edition-type";
import { ResourseVo } from "./vos/resourse.vo";

@ApiTags("Editions")
@Controller("editions")
@ApiBearerAuth()
export class EditionsController {
  constructor(private readonly edtionsService: EditionsService) { }

  @Get("resourse")
  @ApiQuery({
    name: "resourse-tag",
    required: true,
    enum: assign(ResourseTag),
    example: ResourseTag.Init
  })
  @ApiQuery({
    name: "edition",
    required: false,
    type: Number
  })
  @ApiOperation({
    summary: "Get the resource content of the differential edition"
  })
  @ApiCreatedResponse({
    description: "Obtain client version information and update it",
    type: ResourseVo
  })
  public editionByTag(
    @Query("resourse-tag") resourseTag: ResourseTag,
    @Query("edition") edition?: Edition[1]
  ) {
    return this.edtionsService.getCurrentResourseByTag(resourseTag, edition);
  }
}

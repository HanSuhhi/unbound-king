import { Controller, Get, Query, ValidationPipe } from "@nestjs/common";
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";
import { LineagesService } from "../lineages/lineages.service";
import { GenderService } from "../gender/gender.service";
import { ProfessionsService } from "./professions.service";
import { RegistCharacterQueryDto } from "./dtos/regist-character.dto";
import { RegistCharacterProfessionVo } from "./vos/regist-character.vo";

@ApiTags("Professions")
@Controller("professions")
@ApiBearerAuth()
export class ProfessionsController {
  constructor(private readonly professionService: ProfessionsService) { }

  @Get("regist-character-professions")
  @ApiOperation({
    summary: "get professions by gender and "
  })
  @ApiQuery({
    name: "lineage",
    required: true,
    enum: LineagesService.REGIST_CHARACTER_RESOURSE
  })
  @ApiQuery({
    name: "gender",
    required: true,
    enum: GenderService.REGIST_CHARACTER_RESOURSE
  })
  @ApiOkResponse({
    type: RegistCharacterProfessionVo,
    description: "Results for the queried professions"
  })
  public registCharacterProfessions(
    @Query(new ValidationPipe({
      transform: true
    })) query: RegistCharacterQueryDto
  ): RegistCharacterProfessionVo {
    return this.professionService.getProfessionWhenRegistCharacter(query);
  }
}

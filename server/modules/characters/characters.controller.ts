import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { ApiBearerAuth, ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import type { Request } from "express";
import type { UserTokenMessage } from "../auth/auth-type";
import { CharactersService } from "./characters.service";
import { RegistCharacterDto } from "./dtos/reigst-character.dto";
import { RegistCharacterVo } from "./vos/regist-character.vo";

@ApiTags("Character")
@Controller("character")
@ApiBearerAuth()
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) { }

  @Post("registion")
  @ApiOperation({
    summary: "Create a Character",
    description: "create a character with default message"
  })
  @ApiCreatedResponse({
    description: "user regist character created",
    type: RegistCharacterVo
  })
  public async regist(
    @Req() request: Request & { user: UserTokenMessage },
    @Body() createCharacterDto: RegistCharacterDto
  ): Promise<RegistCharacterVo> {
    const userid = request.user.id;
    return await this.charactersService.createCharacter(userid, createCharacterDto);
  }

  @Get("list")
  @ApiCreatedResponse({
    description: "Obtain client version information and update it",
    isArray: true,
    type: RegistCharacterVo
  })
  public async list(
    @Req() request: Request & { user: UserTokenMessage }
  ): Promise<RegistCharacterVo[]> {
    return this.charactersService.queryUserCharacters(request.user.id);
  }
}

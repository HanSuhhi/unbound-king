import { Body, Controller, Post, Req } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import type { Request } from "express";
import type { UserTokenMessage } from "../auth/auth-type";
import { CharactersService } from "./characters.service";
import { RegistCharacterDto } from "./dtos/reigst-character.dto";
import type { RegistCharacterVo } from "./vos/regist-character.vo";

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
  public async regist(
    @Req() request: Request & { user: UserTokenMessage },
    @Body() createCharacterDto: RegistCharacterDto
  ): Promise<RegistCharacterVo> {
    const userid = request.user.id;
    return await this.charactersService.createCharacter(userid, createCharacterDto);
  }
}

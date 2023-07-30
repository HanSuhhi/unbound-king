import { Body, Controller, Post, Req } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import type { Request } from "express";
import type { UserTokenMessage } from "../auth/auth-type";
import { CharactersService } from "./characters.service";
import { CreateCharacterDto } from "./dtos/create-character.dto";

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
  public regist(
    @Req() request: Request & { user: UserTokenMessage },
    @Body() createCharacterDto: CreateCharacterDto
  ) {
    const userid = request.user.id;
    return this.charactersService.createCharacter(userid, createCharacterDto);
  }
}

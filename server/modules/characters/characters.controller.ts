import { Body, Controller, Delete, Get, Post, Query, Req, ValidationPipe } from "@nestjs/common";
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";
import type { Request } from "express";
import { UserDto } from "../auth/auth-type";
import type { UserTokenMessage } from "../auth/auth-type";
import { CharactersService } from "./characters.service";
import { RegistCharacterDto } from "./dtos/reigst-character.dto";
import { RegistCharacterVo } from "./vos/regist-character.vo";
import { RegistCharacterListVo } from "./vos/regist-character-list.vo";
import { RemoveCharacterDto } from "./dtos/remove-character.dto";
import { RemoveCharacterVo } from "./vos/remove-character.vo";

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
    type: RegistCharacterListVo
  })
  public async list(
    @Req() request: Request & { user: UserTokenMessage }
  ): Promise<RegistCharacterListVo> {
    return this.charactersService.queryUserCharacters(request.user.id);
  }

  @Delete("character")
  @ApiQuery({
    name: "id",
    required: true,
    type: String
  })
  @ApiOkResponse({
    type: RemoveCharacterVo,
    description: "delete user character"
  })
  public async character(
    @Req() request: UserDto,
    @Query(new ValidationPipe({
      transform: true
    })) query: RemoveCharacterDto
  ): Promise<RemoveCharacterVo> {
    return this.charactersService.deleteUserCharacter(request.user.id, query);
  }
}

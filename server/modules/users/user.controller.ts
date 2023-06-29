import { Body, Controller, Patch, Query } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { UpdateUserNicknameDto } from "./dtos/update-user-nickname.dto";
import { UsersService } from "./users.service";
import { EmailQueryPipe } from "@/pipes/to.pipe";
import { ApiEmailQuery } from "@/decorators/query/email.query";

@ApiTags("Users")
@Controller("user")
@ApiBearerAuth()
export class UserController {
  constructor(
    private readonly userService: UsersService
  ) {}

  @Patch(":email")
  @ApiEmailQuery()
  @ApiOperation({
    summary: "Update User Nickname",
    description: "update user nickname by email "
  })
  async updateUserNickname(
    @Query("to", EmailQueryPipe) to: string,
    @Body() updateUserNicknameDto: UpdateUserNicknameDto
  ) {
    return await this.userService.updateUserNicknameByEmail(to, updateUserNicknameDto);
  }
}

import { Body, Controller, Patch, Query } from "@nestjs/common";
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { UpdateUserNicknameByEmailDto } from "./dtos/update-user-nickname.dto";
import { UpdateUserNicknameByEmailVo } from "./vos/update-user-nickname-by-email.vo";
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

  @Patch("update-nickname-by-email")
  @ApiEmailQuery()
  @ApiOperation({
    summary: "Update User Nickname",
    description: "update user nickname by email "
  })
  @ApiOkResponse({
    status: 200,
    type: UpdateUserNicknameByEmailVo
  })
  async userNicknameByEmail(
    @Query("to", EmailQueryPipe) to: string,
    @Body() updateUserNicknameDto: UpdateUserNicknameByEmailDto
  ): Promise<UpdateUserNicknameByEmailVo> {
    return await this.userService.updateUserNicknameByEmail(to, updateUserNicknameDto);
  }
}

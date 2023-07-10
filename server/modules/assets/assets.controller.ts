import { Controller, Post } from "@nestjs/common";
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { UpdateUserNicknameByEmailVo } from "../users/vos/update-user-nickname-by-email.vo";
import { IconVo } from "./vos/icon.vo";
import { AssetsService } from "./assets.service";

@ApiTags("Assets")
@Controller("assets")
@ApiBearerAuth()
export class AssetsController {
  constructor(
    private readonly assetService: AssetsService
  ) { }

  @Post("standard-icons")
  @ApiOperation({
    summary: "Get Stardard Game Icons",
    description: "Almost every player can request this interface, but non-login players and punished players cannot."
  })
  @ApiOkResponse({
    status: 200,
    type: UpdateUserNicknameByEmailVo
  })
  standardIcons(): IconVo {
    return this.assetService.getStandardIcons();
  }
}

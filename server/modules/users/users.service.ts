import { Injectable } from "@nestjs/common";
import type { UpdateUserNicknameByEmailDto } from "./dtos/update-user-nickname.dto";
import type { UpdateUserNicknameByEmailVo } from "./vos/update-user-nickname-by-email.vo";
import { TrpcRouter } from "@/trpc/trpc.router";

@Injectable()
export class UsersService {
  constructor(
    private readonly trpcRouter: TrpcRouter
  ) {}

  public async updateUserNicknameByEmail(email: string, { nickname: inputNickname }: UpdateUserNicknameByEmailDto): Promise<UpdateUserNicknameByEmailVo> {
    const nickname = (await this.trpcRouter.caller.user.findOneByEmailAndUpdate({
      email,
      update: { nickname: inputNickname }
    })).nickname;

    return { nickname };
  }
}

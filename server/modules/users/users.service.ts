import { Injectable } from "@nestjs/common";
import type { UpdateUserNicknameDto } from "./dtos/update-user-nickname.dto";
import { TrpcRouter } from "@/trpc/trpc.router";

@Injectable()
export class UsersService {
  constructor(
    private readonly trpcRouter: TrpcRouter
  ) {}

  public async updateUserNicknameByEmail(email: string, { nickname }: UpdateUserNicknameDto) {
    return await this.trpcRouter.caller.user.findOneByEmailAndUpdate({
      email,
      update: { nickname }
    });
  }
}

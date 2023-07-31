import { Injectable } from "@nestjs/common";
import type { Types } from "mongoose";
import type { RegistCharacterDto } from "./dtos/reigst-character.dto";
import type { RegistCharacterVo } from "./vos/regist-character.vo";
import { TrpcRouter } from "@/trpc/trpc.router";

@Injectable()
export class CharactersService {
  constructor(
    private readonly trpcRouter: TrpcRouter
  ) { }

  public async createCharacter(userId: Types.ObjectId, characterDto: RegistCharacterDto): Promise<RegistCharacterVo> {
    const { name, gender, personality, profession, traits } = await this.trpcRouter.caller.character.createUserCharacter({
      belong: userId as unknown as string,
      character: characterDto
    });
    return { name, gender, personality, profession, traits };
  }
}

import { Injectable } from "@nestjs/common";
import type { Types } from "mongoose";
import type { CreateCharacterDto } from "./dtos/create-character.dto";

@Injectable()
export class CharactersService {
  public createCharacter(userId: Types.ObjectId, { name }: CreateCharacterDto) {
    console.log(1);
  }
}

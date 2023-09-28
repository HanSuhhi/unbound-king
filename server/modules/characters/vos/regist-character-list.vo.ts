import { ApiProperty } from "@nestjs/swagger";
import { RegistCharacterVo } from "./regist-character.vo";

export class RegistCharacterListVo {
  @ApiProperty({
    isArray: true,
    type: RegistCharacterVo
  })
  list: RegistCharacterVo[];
}

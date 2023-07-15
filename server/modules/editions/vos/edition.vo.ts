import { ApiEditionProperty } from "../decorators/ApiEditionProperty";
import { Edition } from "../edition-type";

export class EditionVo {
  @ApiEditionProperty()
  asset: Edition;
}

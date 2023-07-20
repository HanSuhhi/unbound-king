import { ApiEditionProperty } from "../decorators/ApiEditionProperty";
import { Edition } from "../edition-type";
import { AssetType } from "@/modules/assets/enums/asset-type.enum";

export class EditionVo {
  @ApiEditionProperty()
  [AssetType.StandardIcon]: Edition;
}

import { ApiEditionProperty } from "../decorators/ApiEditionProperty";
import { Edition } from "../edition-type";
import { ProfessionType } from "@/modules/professions/enums/profession-type.enum";
import { AssetType } from "@/modules/assets/enums/asset-type.enum";

export class EditionVo {
  @ApiEditionProperty()
  [AssetType.StandardIcon]: Edition;

  @ApiEditionProperty()
  [ProfessionType.RegistCharacter]: Edition;
}

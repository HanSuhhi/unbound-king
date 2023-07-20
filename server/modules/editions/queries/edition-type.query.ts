import { ApiQuery } from "@nestjs/swagger";
import { assign } from "lodash";
import { AssetType } from "@/modules/assets/enums/asset-type.enum";

export function ApiEditionTypeQuery(): MethodDecorator {
  return ApiQuery({
    name: "edition-type",
    required: true,
    description: "The specific type of editions.",
    example: AssetType.StandardIcon,
    enum: assign(AssetType)
  });
}

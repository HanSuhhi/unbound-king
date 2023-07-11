import type { Buffer } from "node:buffer";
import { ApiProperty } from "@nestjs/swagger";

export type IconResponse = [iconName: string, iconBuffer: Buffer];

export class IconVo {
  @ApiProperty({
    oneOf: [
      { type: "string" },
      {
        type: "array",
        items: {
          type: "number"
        }
      }
    ],
    type: Array,
    isArray: true,
    required: true,
    description: "icons"
  })
  icons: IconResponse[];
}

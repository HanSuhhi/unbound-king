import type { Buffer } from "node:buffer";
import { ApiProperty } from "@nestjs/swagger";

export type IconResponse = [iconName: string, iconBuffer: Buffer];

export class IconVo {
  @ApiProperty({
    type: Array,
    required: true,
    description: "icons"
  })
  icons: IconResponse[];
}

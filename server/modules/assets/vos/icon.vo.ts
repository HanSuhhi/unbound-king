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

  @ApiProperty({
    type: Number,
    required: true,
    description: "The version number of the resource, the client decides whether to update the local cache resource according to the version number"
  })
  edition: number;

  @ApiProperty({
    type: String,
    required: true,
    description: "The name of the version, used to store in indexDB"
  })
  editionName: string;

  @ApiProperty({
    type: String,
    required: false,
    description: "The nickname of the version, used in some places that may need to be displayed"
  })
  editionNickname?: string;
}

import type { Buffer } from "node:buffer";
import { ApiProperty } from "@nestjs/swagger";
import { ResourseType } from "../enums/resourse-type.enum";
import type { ResourseTag } from "../enums/resourse-tag.enum";
import { arrToTypeString } from "#/composables/js/array";

export type ResourseResponse = [name: string, buffer: Buffer, type: ResourseType];

export class ResourseVo {
  @ApiProperty({
    oneOf: [
      { type: "string" },
      { type: "buffer" },
      { type: arrToTypeString(Array.from(Object.values(ResourseType))) }
    ],
    type: Array,
    isArray: true,
    required: true,
    description: "resourse list"
  })
  resourse: ResourseResponse[];

  @ApiProperty({
    type: Number,
    required: true,
    description: "The edition number of the resource, the client decides whether to update the local cache resource according to the edition number"
  })
  edition: number;

  @ApiProperty({
    type: String,
    required: true,
    description: "The name of the edition, used to store in indexDB"
  })
  editionName: string;

  @ApiProperty({
    type: String,
    required: false,
    description: "The nickname of the edition, used in some places that may need to be displayed"
  })
  editionNickname?: string;

  @ApiProperty({
    type: [Number],
    required: false,
    description: "Possible resource tags"
  })
  tags?: ResourseTag[];
}

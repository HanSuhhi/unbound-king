import { ApiProperty } from "@nestjs/swagger";

export class SendCodeDto {
  @ApiProperty({
    type: String,
    description: "👦 list of receivers",
    example: "l_98b@outlook.com"
  })
  to: string;
}

import { ApiProperty } from "@nestjs/swagger";
import { ResourseVo } from "../vos/resourse.vo";

export function ApiResourseProperty(): PropertyDecorator {
  return ApiProperty({
    required: true,
    type: ResourseVo
  });
}

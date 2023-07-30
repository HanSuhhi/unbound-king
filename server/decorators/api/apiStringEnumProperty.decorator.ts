import { ApiProperty } from "@nestjs/swagger";
import { StringEnumValidator } from "@/decorators/validate/string-enum.validate";

export function ApiStringEnumProperty(obj: object): PropertyDecorator {
  return () => {
    StringEnumValidator(obj);
    ApiProperty({
      required: true,
      enum: obj,
      type: String
    });
  };
}

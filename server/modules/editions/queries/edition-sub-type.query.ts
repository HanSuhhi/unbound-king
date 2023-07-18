import { ApiQuery } from "@nestjs/swagger";

export function ApiEditionSubTypeQuery(): MethodDecorator {
  return ApiQuery({
    name: "edition-sub-type",
    required: true,
    description: "The sub type of editions.",
    example: "BEyA1XPyO4vf"
  });
}

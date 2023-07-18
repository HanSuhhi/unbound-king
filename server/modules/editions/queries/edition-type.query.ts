import { ApiQuery } from "@nestjs/swagger";

export function ApiEditionTypeQuery(): MethodDecorator {
  return ApiQuery({
    name: "edition-type",
    required: true,
    description: "The specific type of editions.",
    example: "asset"
  });
}

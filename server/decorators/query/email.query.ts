import { ApiQuery } from "@nestjs/swagger";

export function ApiEmailQuery(): MethodDecorator {
  return ApiQuery({
    name: "to",
    required: true,
    description: "👦 the verification code receiver",
    example: "l_98b@outlook.com"
  });
}

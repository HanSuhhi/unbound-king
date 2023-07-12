import { ApiProperty } from "@nestjs/swagger";

export function ApiVersionProperty(): PropertyDecorator {
  return ApiProperty({
    oneOf: [
      { type: "string" },
      {
        type: "number"
      },
      {
        type: "string",
        required: false as unknown as string[]
      }
    ],
    required: true,
    type: Array,
    isArray: true,
    example: ["w539l67f9dib", 1, "one-piece"]
  });
}

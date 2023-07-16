import { ApiProperty } from "@nestjs/swagger";

export function ApiEditionProperty(): PropertyDecorator {
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
    example: ["w539l67f9dib", 1, "one-piece"]
  });
}

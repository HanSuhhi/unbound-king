import { StringValidator } from "./string.validator";
import { EnumValidator } from "./enum.validator";

export function StringEnumValidator(obj: object): PropertyDecorator {
  return () => {
    StringValidator();
    EnumValidator(obj);
  };
}

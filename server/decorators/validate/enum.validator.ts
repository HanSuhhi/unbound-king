import { IsEnum } from "class-validator";
import { i18nLangModel } from "#/composables/i18n/index";

export function EnumValidator(obj: object): PropertyDecorator {
  return IsEnum(obj, {
    message() {
      return i18nLangModel.validate.props;
    }
  });
}

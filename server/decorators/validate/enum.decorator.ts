import { IsEnum } from "class-validator";
import { i18nLangModel } from "#/composables/i18n/index";

export function EnumValidate(obj: object): PropertyDecorator {
  return IsEnum(obj, {
    message() {
      return i18nLangModel.validate.props;
    }
  });
}

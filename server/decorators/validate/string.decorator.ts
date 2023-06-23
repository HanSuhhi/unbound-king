import { IsString } from "class-validator";
import { i18nLangModel } from "#/composables/i18n/index";

export function StringValidate(): PropertyDecorator {
  return IsString({
    message() {
      return i18nLangModel.validate.props;
    }
  });
}

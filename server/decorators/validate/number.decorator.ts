import { IsNumber } from "class-validator";
import { i18nLangModel } from "#/composables/i18n/index";

export function NumberValidate(): PropertyDecorator {
  return IsNumber({}, {
    message() {
      return i18nLangModel.validate.props;
    }
  });
}

import { IsEmail } from "class-validator";
import { i18nLangModel } from "#/composables/i18n/index";

export function EmailValidator(): PropertyDecorator {
  return IsEmail({}, {
    message() {
      return i18nLangModel.validate.email;
    }
  });
}

import { IsEmail } from "class-validator";
import { i18nLangModel } from "#/composables/i18n/index";

export function EmailValidate(): PropertyDecorator {
  return IsEmail({}, {
    message() {
      return i18nLangModel.auth.agreePolicy;
    }
  });
}

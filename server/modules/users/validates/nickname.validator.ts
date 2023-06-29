import { IsString, MaxLength } from "class-validator";
import { i18nLangModel } from "#/composables/i18n/index";

export function NicknameValidator(): PropertyDecorator {
  return function () {
    IsString({
      message() {
        return i18nLangModel.validate.props;
      }
    });
    MaxLength(8);
  };
}

import { useMessage } from "naive-ui";
import { useI18n } from "vue-i18n";
import { refUpdate } from "../../../composables/plus/ref";
import { getLoginForm, getLoginFormInst } from "./getters";
import { getVerificationCode } from "@/api/services/mails";
import { i18nLangModel } from "#/composables/i18n";

export function handleVertificationCode() {
  const message = useMessage();
  const loginForm = getLoginForm();
  const loginFormInst = getLoginFormInst();
  const { t } = useI18n();
  const { value: isFreeze, update: toggleFreeze } = refUpdate(false, { readonly: true });

  const sendVertificationCode = async () => {
    if (isFreeze.value) return;
    await loginFormInst.value?.validate(undefined, rule => rule.key === "email");

    const { statusCode } = await getVerificationCode({ to: loginForm.value.form.email }).send(true);
    if (statusCode) return message.error("request error");
    message.success(t(i18nLangModel.auth.sendMail));
    toggleFreeze(true);
  };

  return {
    sendVertificationCode,
    isFreeze,
    toggleFreeze
  };
}

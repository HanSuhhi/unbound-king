import { useMessage } from "naive-ui";
import { refUpdate } from "../../../composables/plus/ref";
import { getLoginForm, getLoginFormInst } from "./getters";
import { getVerificationCode } from "@/api/services/mails";

export function handleVertificationCode() {
  const message = useMessage();
  const loginForm = getLoginForm();
  const loginFormInst = getLoginFormInst();
  const { value: isFreeze, update: toggleFreeze } = refUpdate(false, { readonly: true });

  const sendVertificationCode = async () => {
    if (isFreeze.value) return;
    await loginFormInst.value?.validate(undefined, rule => rule.key === "email");

    const { statusCode } = await getVerificationCode({
      to: loginForm.value.email
    }).send(true);
    if (statusCode) return message.error("request error");
    message.success("Sent successfully");
    toggleFreeze(true);
  };

  return {
    sendVertificationCode,
    isFreeze,
    toggleFreeze
  };
}

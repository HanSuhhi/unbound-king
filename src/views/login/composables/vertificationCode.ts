import { useMessage } from "naive-ui";
import { refUpdate } from "../../../composables/plus/ref";
import { getEmailInput, getEmailStatus } from "./getters";
import { getVerificationCode } from "@/api/services/mails";
import { verifyEmail } from "#/composables/tools/vertivication";

export function useVertificationCode() {
  const { email } = getEmailInput();
  const { updateEmailStatus } = getEmailStatus();
  const { value: isFreeze, update: toggleFreeze } = refUpdate(false, { readonly: true });

  const message = useMessage();

  const sendVertificationCode = async () => {
    if (!verifyEmail(email.value!)) return updateEmailStatus("error");
    else updateEmailStatus("success");
    if (isFreeze.value) return;
    const result = await getVerificationCode({
      to: email.value!
    }).send();
    message.success("Sent successfully");
    toggleFreeze(true);
  };
  return {
    sendVertificationCode,
    isFreeze,
    toggleFreeze
  };
}

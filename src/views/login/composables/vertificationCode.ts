import { useMessage } from "naive-ui";
import { refUpdate } from "../../../composables/plus/ref";
import { getEmailInput, getEmailStatus } from "./getters";
import { getVerificationCode } from "@/api/services/mails";

export function useVertificationCode() {
  const { email } = getEmailInput();
  const { updateEmailStatus } = getEmailStatus();
  const { value: isFreeze, update: toggleFreeze } = refUpdate(false, { readonly: true });

  const message = useMessage();

  const sendVertificationCode = async () => {
    getVerificationCode({
      to: "l_98b@outlook.com"
    }).send();
    // if (!verifyEmail(email.value!)) return updateEmailStatus("error");
    // else updateEmailStatus("success");
    // if (isFreeze.value) return;
    // await send();
    // message.success("Sent successfully");
    // toggleFreeze(true);
  };
  return {
    sendVertificationCode,
    isFreeze,
    toggleFreeze
  };
}

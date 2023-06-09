import { useMessage } from "naive-ui";
import { refUpdate } from "../../../composables/plus/ref";
import { getEmailInput, getEmailStatus } from "./getters";
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
    message.success("code");
    toggleFreeze(true);
  };
  return {
    sendVertificationCode,
    isFreeze,
    toggleFreeze
  };
}

import type { InputProps } from "naive-ui";
import { EmailInputStatusSymbol, EmailInputSymbol } from "../login.symbol";
import { verifyEmail } from "#/composables/tools/vertivication";
import { useProvide } from "@/composables/plus/provide";

export const EMAIL_INPUT_PROPS: InputProps["inputProps"] = {
  type: "email",
  name: "email"
};

export function useEmailInput() {
  const { value: email } = useProvide(EmailInputSymbol, "", { readonly: false });
  const { value: emailStatus, update: updateEmailStatus } = useProvide<InputProps["status"]>(EmailInputStatusSymbol);

  const checkEmailIsRight = updateEmailStatus.bind(null, verifyEmail(email.value!) ? "success" : "error");

  return { email, checkEmailIsRight, emailStatus };
}

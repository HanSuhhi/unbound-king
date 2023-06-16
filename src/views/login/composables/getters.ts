import type { InputProps } from "naive-ui";
import { inject } from "vue";
import { EmailInputStatusSymbol, EmailInputSymbol } from "../login.symbol";
import type { ProvideProps } from "@/composables/plus/provide";

export function getEmailStatus() {
  const { value, update } = inject<ProvideProps<InputProps["status"]>>(EmailInputStatusSymbol)!;
  return { emailStatus: value, updateEmailStatus: update };
}

export function getEmailInput() {
  const { value, update } = inject<ProvideProps<string>>(EmailInputSymbol)!;
  return { email: value, updateEmail: update };
}
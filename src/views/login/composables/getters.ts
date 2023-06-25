import type { Ref } from "vue";
import { inject } from "vue";
import type { FormInst } from "naive-ui";
import { LoginFormInstSymbol, LoginFormSymbol } from "../login.symbol";

export function getLoginForm(): Ref {
  return inject(LoginFormSymbol)!;
}

export function getLoginFormInst(): Ref<FormInst | null> {
  return inject(LoginFormInstSymbol)!;
}

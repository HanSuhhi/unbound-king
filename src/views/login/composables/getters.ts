import type { Ref } from "vue";
import { inject } from "vue";
import type { FormInst } from "naive-ui";
import { LoginFormInstSymbol, LoginFormSymbol } from "../login.symbol";
import type { RequestBodyParamType } from "@/api/alova";
import type { postLoginWithEmail } from "@/api/services/auth";

export function getLoginForm(): Ref<RequestBodyParamType<typeof postLoginWithEmail>> {
  return inject(LoginFormSymbol)!;
}

export function getLoginFormInst(): Ref<FormInst | null> {
  return inject(LoginFormInstSymbol)!;
}

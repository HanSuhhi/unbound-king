import type { FormInst, FormItemRule } from "naive-ui";
import { provide, ref } from "vue";
import { LoginFormInstSymbol, LoginFormSymbol } from "../login.symbol";
import type { postLoginWithEmail } from "@/api/services/auth";
import { verifyEmail } from "#/composables/tools/vertivication";
import type { RequestBodyParamType } from "@/api/alova";

export function useLoginForm() {
  const FormInst = ref<FormInst | null>(null);
  provide(LoginFormInstSymbol, FormInst);

  const loginForm = ref<RequestBodyParamType<typeof postLoginWithEmail>>({
    email: "",
    code: null as unknown as number,
    loginType: "9anqHyzvl83l" // means login
  });
  provide(LoginFormSymbol, loginForm);

  const loginFormRules: Dictionary<FormItemRule> = {
    email: {
      required: true,
      trigger: "blur",
      key: "email",
      validator: (_, value) => {
        return verifyEmail(value) || new Error(" ");
      }
    },
    code: {
      required: true,
      trigger: "blur",
      key: "code",
      validator: (_, value) => value?.toString().length === 6 || new Error(" ")
    }
  };

  return { FormInst, loginForm, loginFormRules };
}

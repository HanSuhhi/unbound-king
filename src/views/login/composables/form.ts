import type { FormInst, FormItemRule } from "naive-ui";
import { provide, ref } from "vue";
import { LoginFormInstSymbol, LoginFormSymbol } from "../login.symbol";
import { verifyEmail } from "#/composables/tools/vertivication";
import { i18n } from "@/locals";
import { i18nLangModel } from "#/composables/i18n";

export function useLoginForm() {
  const FormInst = ref<FormInst | null>(null);
  provide(LoginFormInstSymbol, FormInst);

  const loginForm = ref({
    form: {
      email: "",
      code: null as unknown as number,
      loginType: "9anqHyzvl83l" // means login
    },
    policy: false
  });
  provide(LoginFormSymbol, loginForm);

  const loginFormRules = {
    form: <Dictionary<FormItemRule>>{
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
    },
    policy: <FormItemRule>{
      required: true,
      key: "policy",
      trigger: "change",
      validator: (_, value) => value || new Error(i18n.global.t(i18nLangModel.auth.policyForm))
    }
  };

  return { FormInst, loginForm, loginFormRules };
}

import type { Ref } from "vue";
import { HttpStatus } from "@nestjs/common";
import { type FormInst } from "naive-ui";
import { postLoginWithEmail } from "@/api/services/auth";
import { useGlobalDialog } from "@/composables/components/globalDialog";
import { i18nLangModel } from "#/composables/i18n";
import { i18n } from "@/locals";

export function useLoginAuth(loginForm: Ref, loginFormInst: Ref<FormInst | null>) {
  async function registration() {
    const { statusCode, data: { access_token } } = await postLoginWithEmail({
      ...loginForm.value,
      loginType: "JHuWYPd9be4E"
    }).send();
    if (statusCode) return;

    return access_token;
  }

  async function handleLogin() {
    await loginFormInst.value?.validate(undefined);

    const { statusCode, data } = await postLoginWithEmail({
      email: loginForm.value.email,
      code: loginForm.value.code,
      loginType: "9anqHyzvl83l"
    }).send();

    if (!statusCode) return data.access_token;

    const { warning } = useGlobalDialog();
    switch (statusCode) {
      case HttpStatus.ACCEPTED:
        return warning({
          title: i18n.global.t(i18nLangModel.registration.title),
          text: i18n.global.t(i18nLangModel.registration.text),
          confirm: registration
        });
      default: break;
    }
  }

  return { handleLogin };
}

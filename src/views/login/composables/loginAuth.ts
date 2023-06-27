import type { Ref } from "vue";
import { HttpStatus } from "@nestjs/common";
import { type FormInst } from "naive-ui";
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { postLoginWithEmail } from "@/api/services/auth";
import { useGlobalDialog } from "@/composables/components/globalDialog";
import { i18nLangModel } from "#/composables/i18n";
import { i18n } from "@/locals";
import { useIf } from "#/composables/run/if";
import { useUserService } from "@/services/databases/user/user.service";
import { useAuthStore } from "@/stores/auth.store";

export function useLoginAuth(loginForm: Ref, loginFormInst: Ref<FormInst | null>) {
  const { registUserMessage } = useUserService();
  const { token } = storeToRefs(useAuthStore());

  const rememberMe = ref(false);
  const keepLogin = ref(false);

  async function registration() {
    const { statusCode, data: { access_token } } = await postLoginWithEmail({
      ...loginForm.value.form,
      loginType: "JHuWYPd9be4E"
    }).send();
    const [ifSuccess, ifFail] = useIf(!statusCode);

    ifFail(() => {

    });

    ifSuccess(async () => {
      if (rememberMe.value) await registUserMessage(loginForm.value.form.email);
      token.value = access_token!;
    });
  }

  async function handleLogin() {
    await loginFormInst.value?.validate(undefined);

    const { statusCode, data } = await postLoginWithEmail(loginForm.value.form).send();

    const [ifSuccess, ifFail] = useIf(!statusCode);

    ifSuccess(() => {
      if (rememberMe.value) registUserMessage(loginForm.value.form.email);
      token.value = data.access_token!;
    });

    ifFail(() => {
      const { warning } = useGlobalDialog();
      switch (statusCode) {
        case HttpStatus.ACCEPTED:
          return warning({
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            title: i18n.global.t(i18nLangModel.registration.title),
            text: i18n.global.t(i18nLangModel.registration.text),
            confirm: registration
          });
        default: break;
      }
    });
  }

  return { handleLogin, rememberMe, keepLogin };
}

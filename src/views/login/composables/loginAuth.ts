import type { Ref } from "vue";
import { HttpStatus } from "@nestjs/common";
import { type FormInst } from "naive-ui";
import { computed, provide, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import type { Router } from "vue-router";
import { useRouter } from "vue-router";
import { RememberEmailSymbol } from "../login.symbol";
import type { ResponseType_PostLoginWithEmail } from "@/api/services/auth";
import { postLoginWithEmail } from "@/api/services/auth";
import { useGlobalDialog } from "@/composables/components/globalDialog";
import { i18nLangModel } from "#/composables/i18n";
import { i18n } from "@/locals";
import { useIf } from "#/composables/run/if";
import { useUserService } from "@/services/databases/user/user.service";
import { useAuthStore } from "@/stores/auth.store";
import type { Role } from "#/composables/enum/role.enum";
import { CLIENT_GAME_PREFIX } from "#/composables/constant/url";

export function loginSuccess(userEmail: string, userToken: string, userRoles: Role[], router: Router) {
  const { token, roles, email } = storeToRefs(useAuthStore());

  token.value = userToken!;
  roles.value = userRoles!;
  email.value = userEmail!;
  router.push({ name: CLIENT_GAME_PREFIX });
}

export function useLoginAuth(loginForm: Ref, loginFormInst: Ref<FormInst | null>) {
  const { registUserMessage, deleteUserMessage, storeUserToken, deleteUserToken } = useUserService();
  const router = useRouter();
  const email = computed(() => loginForm.value.form.email);

  const rememberEmail = ref(false);
  const keepSigned = ref(false);
  watch(rememberEmail, (isrememberEmail) => {
    if (!isrememberEmail) keepSigned.value = false;
  });
  watch(keepSigned, (isKeepSigned) => {
    if (isKeepSigned) rememberEmail.value = true;
  });
  provide(RememberEmailSymbol, rememberEmail);

  async function loginSuccessCallback({ access_token, roles: userRoles }: ResponseType_PostLoginWithEmail) {
    if (rememberEmail.value) await registUserMessage(email.value);
    else await deleteUserMessage(email.value);

    if (keepSigned.value) await storeUserToken(email.value, access_token, userRoles as Role[]);
    else await deleteUserToken(email.value);

    loginSuccess(email.value, access_token, userRoles as Role[], router);
  }

  async function registration() {
    const { statusCode, data } = await postLoginWithEmail({
      ...loginForm.value.form,
      loginType: "JHuWYPd9be4E"
    }).send();
    const [ifSuccess, ifFail] = useIf(!statusCode);
    // ifFail(() => {});
    ifSuccess(loginSuccessCallback.bind(null, data));
  }

  async function handleLogin() {
    await loginFormInst.value?.validate(undefined);

    const { statusCode, data } = await postLoginWithEmail(loginForm.value.form).send();
    const [ifSuccess, ifFail] = useIf(!statusCode);

    ifSuccess(loginSuccessCallback.bind(null, data));

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

  return { handleLogin, rememberEmail, keepSigned };
}

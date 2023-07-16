import type { Ref } from "vue";
import { HttpStatus } from "@nestjs/common";
import { type FormInst } from "naive-ui";
import { computed, provide, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import type { Router } from "vue-router";
import { useRouter } from "vue-router";
import { useRequest } from "alova";
import { forEach } from "lodash";
import { RememberEmailSymbol } from "../login.symbol";
import type { ResponseType_PostLoginWithEmail } from "@/api/services/auth";
import { postLoginWithEmail } from "@/api/services/auth";
import { useGlobalDialog } from "@/composables/components/globalDialog";
import { i18nLangModel } from "#/composables/i18n";
import { i18n } from "@/locals";
import { useIf } from "#/composables/run/if";
import { useUserService } from "@/services/databases/user/user.service";
import { useAuthStore } from "@/stores/auth.store";
import { Prefix } from "#/composables/constant/url";
import { useStateStore } from "@/stores/state.store";
import { State } from "@/enums/state.enum";
import { useVersionService } from "@/services/databases/edition/edition.service";
import { getEditions } from "@/api/services/editions";

export async function loginSuccess(userEmail: string, { access_token: userToken, roles: userRoles, nickname: userNickname }: ResponseType_PostLoginWithEmail, { replace }: Router) {
  const { token, roles, email, nickname } = storeToRefs(useAuthStore());
  const { send } = useRequest(getEditions, { immediate: false });
  const { STATE } = storeToRefs(useStateStore());
  const { checkIfVersionIsRight } = useVersionService();

  token.value = userToken!;
  roles.value = userRoles!;
  email.value = userEmail!;
  nickname.value = userNickname!;
  STATE.value = State.Game;

  const { data: versions } = await send();
  forEach(versions, async ([name, edition]) => {
    const ifCurrent = await checkIfVersionIsRight(name, edition);
  });

  replace({ name: Prefix.Client_Game });
}

export function useLoginAuth(loginForm: Ref, loginFormInst: Ref<FormInst | null>) {
  const { registUserEmail, deleteUserMessage, storeUserToken, deleteUserToken } = useUserService();
  const router = useRouter();
  const email = computed(() => loginForm.value.form.email);

  const rememberEmail = ref(true);
  const keepSigned = ref(false);
  watch(rememberEmail, (isrememberEmail) => {
    if (!isrememberEmail) keepSigned.value = false;
  });
  watch(keepSigned, (isKeepSigned) => {
    if (isKeepSigned) rememberEmail.value = true;
  });
  provide(RememberEmailSymbol, rememberEmail);

  async function loginSuccessCallback(loginSuccessResponse: ResponseType_PostLoginWithEmail) {
    if (rememberEmail.value) await registUserEmail(email.value);
    else await deleteUserMessage(email.value);

    if (keepSigned.value) await storeUserToken(email.value, loginSuccessResponse);
    else await deleteUserToken(email.value);

    loginSuccess(email.value, loginSuccessResponse, router);
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

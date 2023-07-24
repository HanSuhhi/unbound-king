import type { Ref } from "vue";
import { HttpStatus } from "@nestjs/common";
import { type FormInst } from "naive-ui";
import { computed, provide, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import type { Router } from "vue-router";
import { useRouter } from "vue-router";
import { delay, forEach } from "lodash";
import { RememberEmailSymbol } from "../login.symbol";
import type { ResponseType_PostLoginWithEmail } from "@/api/services/auth";
import { postLoginWithEmail } from "@/api/services/auth";
import { useGlobalDialog } from "@/composables/components/globalDialog";
import { i18nLangModel } from "#/composables/i18n";
import { i18n } from "@/locals";
import { useIf } from "#/composables/run/if";
import { useUserService } from "@/services/databases/user/user.service";
import { useAuthStore } from "@/stores/auth.store";
import { useStateStore } from "@/stores/state.store";
import { State } from "@/enums/state.enum";
import { useEditionService } from "@/services/databases/edition/edition.service";
import type { ResponseType_GetSupplement } from "@/api/services/editions";
import { getEditions, getSupplement } from "@/api/services/editions";
import { useResourseService } from "@/services/databases/resourse/resourse.service";

export async function loginSuccess(userEmail: string, { access_token: userToken, roles: userRoles, nickname: userNickname }: ResponseType_PostLoginWithEmail, { replace }: Router) {
  const { token, roles, email, nickname } = storeToRefs(useAuthStore());
  const { STATE } = storeToRefs(useStateStore());
  const { checkIfEditionIsRight: checkIfVersionIsRight, addEdition } = useEditionService();

  console.log(1);

  token.value = userToken!;
  roles.value = userRoles!;
  email.value = userEmail!;
  nickname.value = userNickname!;
  STATE.value = State.Game;

  const { data: versions } = await getEditions().send();
  const parseResourses = (resourses: ResponseType_GetSupplement["resourse"]) => {
    const { storeResourse } = useResourseService();
    resourses.forEach((resourse) => {
      storeResourse(resourse);
    });
  };

  forEach(versions, async ([editionSubType, edition], editionType) => {
    const [_, ifEditionNotCurrent] = useIf(await checkIfVersionIsRight(editionSubType, edition));
    ifEditionNotCurrent(async () => {
      // i dont know why I can not get current response if I dont set timeout
      // maybe one day i will fix it.
      delay(async () => {
        const { data: { edition, editionName, resourse } } = await getSupplement({
          "edition-type": editionType as Parameters<typeof getSupplement>[0]["edition-type"]
        }).send();
        addEdition(editionName, edition);
        parseResourses(resourse);
      }, 100);
    });
  });
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
    console.log("🚀 ~ file: loginAuth.ts:76 ~ loginSuccessCallback ~ loginSuccessResponse:", loginSuccessResponse);
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

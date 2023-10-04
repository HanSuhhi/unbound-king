import { defer } from "lodash";
import { storeToRefs } from "pinia";
import type { Ref } from "vue";
import { useRouter } from "vue-router";
import { useMessage } from "naive-ui";
import { useI18n } from "vue-i18n";
import { useGlobalDialog } from "@/composables/components/globalDialog";
import { createAutoMountEvent } from "@/composables/experience/key/mountKeyCommand";
import { useKeyStore } from "@/stores/key.store";
import { i18nLangModel } from "#/composables/i18n";
import { useAuthStore } from "@/stores/auth.store";
import { useStateStore } from "@/stores/state.store";
import { State } from "@/enums/state.enum";
import { Prefix } from "#/composables/constant/url";

export function defineLogoutEvent(popoverControl: Ref<boolean>) {
  const { warning } = useGlobalDialog();
  const { resetUser } = useAuthStore();
  const { info } = useMessage();
  const { t } = useI18n();
  const { freeze } = storeToRefs(useKeyStore());
  const { STATE } = storeToRefs(useStateStore());
  const { replace } = useRouter();

  return createAutoMountEvent(popoverControl)({
    key: "a",
    translator: i18nLangModel.header.perference.backLogin,
    fn: (isPressed: boolean) => {
      if (import.meta.env.SSR) return;
      if (document.activeElement?.tagName !== "BODY") return;

      if (!isPressed) {
        popoverControl.value = false;
        defer(() => {
          warning({
            title: i18nLangModel.dialog.logout.title,
            text: i18nLangModel.dialog.logout.description,
            confirm() {
              resetUser();
              STATE.value = State.Auth;
              info(t(i18nLangModel.dialog.logout.success));
              replace({ name: "auth" });
            },
            cancel() { },
            init: () => freeze.value = true
          });
        });
      }
    }
  });
}

export function defineReplaceDeveloperPageEvent(popoverControl: Ref<boolean>) {
  const { replace } = useRouter();
  const { STATE } = storeToRefs(useStateStore());

  return createAutoMountEvent(popoverControl)({
    key: "m",
    translator: i18nLangModel.header.perference.replaceDeveloperPage,
    fn: (isPressed: boolean) => {
      if (import.meta.env.SSR) return;
      if (document.activeElement?.tagName !== "BODY") return;

      if (!isPressed) {
        popoverControl.value = false;
        defer(() => {
          STATE.value = State.Dev;

          replace({ name: Prefix.Client_Dev_Default });
        });
      }
    }
  });
}

import { defer } from "lodash";
import { storeToRefs } from "pinia";
import type { Ref } from "vue";
import { useRouter } from "vue-router";
import { useGlobalDialog } from "@/composables/components/globalDialog";
import { createAutoMountEvent } from "@/composables/key/mountKeyCommand";
import { useKeyStore } from "@/stores/key.store";

export function defineLogoutEvent(popoverControl: Ref<boolean>) {
  const { warning } = useGlobalDialog();
  const { freeze } = storeToRefs(useKeyStore());
  const router = useRouter();

  return createAutoMountEvent(popoverControl)({
    key: "a",
    translator: ["logout-auth", "退出到登录界面"],
    fn: (isPressed: boolean) => {
      if (import.meta.env.SSR) return;
      if (document.activeElement?.tagName !== "BODY") return;

      if (!isPressed) {
        popoverControl.value = false;
        defer(() => {
          warning({
            title: "返回到登录界面",
            text: "是否确认并返回到登录界面？已保存的用户信息不会被清空。",
            confirm() {
              console.log(1);
            },
            cancel() {
              console.log(2);
            },
            init() {
              freeze.value = true;
            }
          });
        });
      }
    }
  });
}

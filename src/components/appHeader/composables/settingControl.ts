import { usePlayerStore } from "@/stores/player.store";
import { useSettingStore } from "@/views/setting/store/setting.store";
import { useMousePressed } from "@vueuse/core";
import { storeToRefs } from "pinia";
import { watchEffect } from "vue";
import { defineSettingDevEntryAuth } from "../../../auth/composables/setting/dev.auth";

export const useSettingControl = () => {
  const { authOperations } = usePlayerStore();
  const { SettingEnterIconRef } = storeToRefs(useSettingStore());
  const { pressed } = useMousePressed({ target: SettingEnterIconRef });

  let watchEvent: number;

  watchEffect(() => {
    const auth = defineSettingDevEntryAuth();
    if (pressed.value) {
      watchEvent = setTimeout(() => {
        if (authOperations.in(auth.ticket)) return;
        authOperations.add(auth);
        SettingEnterIconRef.value?.classList.add("shake");
      }, 1000);
    } else {
      clearTimeout(watchEvent);
      SettingEnterIconRef.value?.classList.remove("shake");
    }
  });

  return { SettingEnterIconRef };
};

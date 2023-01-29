import { entryDevSettingAuth } from "@/auth/pages/setting.auth";
import { usePlayerStore } from "@/stores/player.store";
import { useSettingStore } from "@/stores/setting.store";
import { useMousePressed } from "@vueuse/core";
import { storeToRefs } from "pinia";
import { watchEffect } from "vue";

export const useSettingControl = () => {
  const { auth } = usePlayerStore();
  const { SettingRef } = storeToRefs(useSettingStore());
  const { pressed } = useMousePressed({ target: SettingRef });

  let watchEvent: number;

  watchEffect(() => {
    const ticket = entryDevSettingAuth.ticket;
    if (pressed.value) {
      watchEvent = setTimeout(() => {
        if (auth.in(ticket)) return;
        auth.add(ticket);
        SettingRef.value?.classList.add("shake");
      }, 1000);
    } else {
      clearTimeout(watchEvent);
      SettingRef.value?.classList.remove("shake");
    }
  });

  return { SettingRef };
};

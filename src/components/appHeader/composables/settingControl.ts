import { entryDevSettingAuth } from "@/auth/pages/setting.auth";
import { usePlayerStore } from "@/stores/player.store";
import { useSettingStore } from "@/stores/setting.store";
import { useMousePressed } from "@vueuse/core";
import { storeToRefs } from "pinia";
import { watchEffect } from "vue";

export const useSettingControl = () => {
  const { auth } = usePlayerStore();
  const { SettingEnterIconRef } = storeToRefs(useSettingStore());
  const { pressed } = useMousePressed({ target: SettingEnterIconRef });

  let watchEvent: number;

  watchEffect(() => {
    const ticket = entryDevSettingAuth.ticket;
    if (pressed.value) {
      watchEvent = setTimeout(() => {
        if (auth.in(ticket)) return;
        auth.add(ticket);
        SettingEnterIconRef.value?.classList.add("shake");
      }, 1000);
    } else {
      clearTimeout(watchEvent);
      SettingEnterIconRef.value?.classList.remove("shake");
    }
  });

  return { SettingEnterIconRef };
};

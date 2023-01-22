import { entryDevSettingAuth } from "@/auth/pages/setting.auth";
import { usePlayerStore } from "@/stores/player.store";
import { useSettingStore } from "@/stores/setting.store";
import { useMousePressed } from "@vueuse/core";
import { storeToRefs } from "pinia";
import { watchEffect } from "vue";

export const useSettingControl = () => {
  const { auth } = usePlayerStore();
  const { Setting } = storeToRefs(useSettingStore());
  const { pressed } = useMousePressed({ target: Setting });

  let watchEvent: number;

  watchEffect(() => {
    let ticket = entryDevSettingAuth.ticket;
    if (pressed.value) {
      watchEvent = setTimeout(() => {
        if (auth.in(ticket)) return;
        auth.add(ticket);
        Setting.value?.classList.add("shake");
      }, 1500);
    } else {
      clearTimeout(watchEvent);
      Setting.value?.classList.remove("shake");
    }
  });
  return { Setting };
};

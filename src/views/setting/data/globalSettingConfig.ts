import { usePlayerStore } from "@/stores/player.store";
import { storeToRefs } from "pinia";
import { computed, toRef } from "vue";
import { defineAsideDevEntryAuth } from "../../../auth/composables/setting/dev.auth";

export const globalSettingConfig = computed<SettingModule[]>(() => {
  const { states } = storeToRefs(usePlayerStore());
  return [
    {
      title: "权限设置",
      items: [
        {
          title: "开发者权限",
          type: "switch",
          switch: {
            auth: defineAsideDevEntryAuth(),
            default: toRef(states.value, "aside_dev_entry"),
          },
        },
      ],
    },
  ];
});

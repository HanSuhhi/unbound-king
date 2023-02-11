import { ref } from "vue";

export const globalSettingConfig = ref<SettingModule[]>([
  {
    title: "权限设置",
    items: [
      {
        title: "开发者权限",
        type: "switch",
      },
    ],
  },
]);

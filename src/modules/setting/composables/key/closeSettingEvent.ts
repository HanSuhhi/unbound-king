import type { Ref } from 'vue';
import { inject } from 'vue';
import { mountKeyCommand } from '@/composables/key/mountKeyCommand';

export const defineFooterCloseSettingEvent = () => {
  const settingShow = inject<Ref<boolean>>("setting")!;

  const event: KeyEvent = {
    key: "escape",
    translator: ["close-setting", "关闭"],
    fn: (isPressed: boolean) => {
      if (!isPressed) settingShow.value = false;
    },
  };

  return [mountKeyCommand(event)];
};
import type { Ref } from "vue";
import { inject } from "vue";
import { BaseSettingConfig } from "../base-setting.symbol";

export function useCurrentSettingConfig() {
  return inject<Ref<BaseSetting>>(BaseSettingConfig);
}

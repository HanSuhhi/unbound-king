import type { Ref } from "vue";
import { inject, provide, ref } from "vue";
import { BaseSettingTabsState } from "../base-setting.symbol";

const _tabItems: Translator[] = [["system", "系统设置"], ["game", "游戏设置"]];

export function useTabs() {
  const currentTab = ref<string>(_tabItems[0][0]);

  const tabItems = ref<Translator[]>(_tabItems);

  function tabChange(key: string) {
    currentTab.value = key;
  }
  provide(BaseSettingTabsState, currentTab);

  return { tabItems, tabChange };
}

export function useCurrentTab() {
  const currentTab = inject<Ref<string>>(BaseSettingTabsState);

  return [currentTab];
}

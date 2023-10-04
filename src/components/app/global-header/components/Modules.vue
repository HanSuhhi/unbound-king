<script setup lang='ts'>
import type { Component } from "vue";
import { computed, markRaw, provide, shallowRef } from "vue";
import { OpenUserHistorySymbol, TopModulesLengthSymbol } from "../global-header.symbol";
import I18n from "./mainModules/I18n.vue";
import ThemeController from "./mainModules/themeController.vue";
import ScreenController from "./mainModules/ScreenController.vue";
import BasePreference from "./mainModules/BasePreference.vue";
import Explanation from "@/components/experience/Explanation.vue";
import KbdEvent from "@/components/KeyEvent.vue";
import { defineKeyEventWithoutFn } from "@/composables/experience/key/keyEvent";
import { i18nLangModel } from "#/composables/i18n/index";
import UserHistory from "@/components/userHistory/UserHistory.vue";
import { useUserHistory } from "@/components/userHistory/history";

type ModuleBlock = [
  component: Component,
  keyEventWithoutFn: KeyEventWithoutFn
];

const modules = shallowRef<ModuleBlock[]>([
  [markRaw(I18n), defineKeyEventWithoutFn(["control", "l"])(i18nLangModel.modules.i18n)],
  [markRaw(ThemeController), defineKeyEventWithoutFn(["control", "d"])(i18nLangModel.modules.theme.title)],
  [markRaw(ScreenController), defineKeyEventWithoutFn("f11")(i18nLangModel.modules.screen.title)],
  [markRaw(BasePreference), defineKeyEventWithoutFn(["control", "m"])(i18nLangModel.modules.modules.title)]
]);

const modulesLength = computed(() => modules.value.length);

const { historyDrawer } = useUserHistory();
provide(OpenUserHistorySymbol, () => historyDrawer.value = true);

provide(TopModulesLengthSymbol, modulesLength);
</script>

<template>
  <user-history v-model="historyDrawer" />
  <section class="header-modules">
    <template v-for="[component, keyEventWithoutFn], index of modules" :key="keyEventWithoutFn.translator[0]">
      <explanation>
        <template #trigger>
          <component :is="component" :enter-key-event="keyEventWithoutFn" :index="index" />
        </template>
        <kbd-event :key-event="keyEventWithoutFn" />
      </explanation>
    </template>
  </section>
</template>

<style scoped>
@layer component {
  .header-modules {
    display: flex;
  }

  :deep(.module-icon) {
    display: flex;
    align-items: center;

    margin-right: var(--base-margin);

    font-size: calc( 1.1 * var(--font-title-main));

    filter: brightness(0.7);

    transition: var(--transition-prop);
  }

  :deep(.module-icon:hover) {
    filter: brightness(1);
  }
}
</style>

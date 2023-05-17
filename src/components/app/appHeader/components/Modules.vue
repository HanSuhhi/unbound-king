<script setup lang='ts'>
import type { Component } from "vue";
import { markRaw, ref } from "vue";
import I18n from "./mainModules/I18n.vue";
import ThemeController from "./mainModules/themeController.vue";
import ScreenController from "./mainModules/ScreenController.vue";
import BasePreference from "./mainModules/BasePreference.vue";
import Explanation from "@/components/experience/Explanation.vue";
import { i18nLangModel } from "@/locals/lang.model";
import KbdEvent from "@/components/KeyEvent.vue";
import { defineKeyEventWithoutFn } from "@/composables/key/keyEvent";

type ModuleBlock = [
  component: Component,
  keyEventWithoutFn: KeyEventWithoutFn
];

const modlues = ref<ModuleBlock[]>([
  [markRaw(I18n), defineKeyEventWithoutFn(["control", "l"])(["toggle i18n", i18nLangModel.modules.i18n])],
  [markRaw(ThemeController), defineKeyEventWithoutFn(["control", "t"])(["toggle theme", i18nLangModel.modules.theme.title])],
  [markRaw(ScreenController), defineKeyEventWithoutFn("f11")(["fullscreen", i18nLangModel.modules.screen.title])],
  [markRaw(BasePreference), defineKeyEventWithoutFn(["control", "m"])(["toggle modules", i18nLangModel.modules.modules.title])]
]);
</script>

<template>
  <section class="header-modules">
    <template v-for="[component, keyEventWithoutFn], index of modlues" :key="keyEventWithoutFn.translator[0]">
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

    font-size: var(--font-title-main);

    filter: brightness(0.7);

    transition: var(--transition-prop);
  }

  :deep(.module-icon:hover) {
    filter: brightness(1);
  }
}
</style>

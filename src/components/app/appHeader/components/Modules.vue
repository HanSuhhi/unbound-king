<script setup lang='ts'>
import type { Component } from "vue";
import { markRaw, ref } from "vue";

import { useI18n } from "vue-i18n";
import BasePreference from "./BasePreference.vue";
import I18n from "./I18n.vue";
import ScreenController from "./ScreenController.vue";
import ThemeController from "./themeController.vue";
import Explanation from "@/components/experience/Explanation.vue";
import { i18nLangModel } from "@/locals/lang.model";

const { t } = useI18n();

type ModuleBlock = [
  translator: Translator,
  component: Component
];

const modlues = ref<ModuleBlock[]>([
  [["i18n", i18nLangModel.modules.theme], markRaw(I18n)],
  [["theme", i18nLangModel.modules.theme], markRaw(ThemeController)],
  [["screen", i18nLangModel.modules.screen], markRaw(ScreenController)],
  [["modules", i18nLangModel.modules.modules], markRaw(BasePreference)]
]);
</script>

<template>
  <section class="header-modules">
    <template v-for="[[key, title], component] of modlues" :key="key">
      <explanation>
        <template #trigger>
          <component :is="component" />
        </template>
        <p class="p-reset">
          {{ t(title) }}
        </p>
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

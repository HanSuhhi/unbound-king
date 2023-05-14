<script setup lang='ts'>
import BasePreference from "./BasePreference.vue";
import I18n from "./I18n.vue";
import ScreenController from "./ScreenController.vue";
import ThemeController from "./themeController.vue";
</script>

<template>
  <section class="header-modules">
    <i18n />
    <theme-controller />
    <screen-controller />
    <base-preference />
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

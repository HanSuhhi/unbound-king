<script setup lang='ts'>
import { useI18n } from "vue-i18n";
import { i18nLangModel } from "#/composables/i18n/index";

const { t } = useI18n();
</script>

<template>
  <article class="character-selection">
    <div class="character-selection_selection">
      {{ t(i18nLangModel.arcade["character-selection"].selectionTitle) }}
    </div>
    <div class="character-selection_character">
      {{ t(i18nLangModel.arcade["character-selection"].characterTitle) }}
    </div>
  </article>
</template>

<style scoped>
@layer page {
  .character-selection {
    --margin-size: 8%;

    position: relative;

    display: flex;
    justify-content: space-between;

    height: calc(100vh - var(--global-header-height));
    margin: 0 var(--margin-size);
  }

}
</style>

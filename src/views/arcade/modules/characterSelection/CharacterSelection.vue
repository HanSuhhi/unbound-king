<script setup lang='ts'>
import { useI18n } from "vue-i18n";
import { key_regist_character } from "./composables/character";
import { i18nLangModel } from "#/composables/i18n/index";
import KeyEventButton from "@/components/typeButton/KeyEventButton.vue";

const { t } = useI18n();
const [confirm] = key_regist_character();
</script>

<template>
  <article class="character-selection">
    <section class="character-selection_selection">
      {{ t(i18nLangModel.arcade["character-selection"].selectionTitle) }}
      <div class="character-selection_characters">
        Some characters are here.
      </div>
      <div class="character-selection_operators">
        <key-event-button :key-event="confirm!" />
      </div>
    </section>
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
    align-items: center;
    justify-content: space-between;

    width: 60%;
    height: calc(100vh - var(--global-header-height));
    margin: 0 var(--margin-size);

  }

  .character-selection_selection {
    display: flex;
    flex-direction: column;
    height: 80%;
  }

  .character-selection_characters {
    flex: 1;
  }
}
</style>

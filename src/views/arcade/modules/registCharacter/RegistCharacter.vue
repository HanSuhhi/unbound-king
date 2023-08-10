<script setup lang='ts'>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <article class="regist-character">
    <section class="regist-character_selection">
      some icons here
      <div class="regist-character_characters">
        icons description
      </div>
      <div class="regist-character_operators" />
    </section>
    <div class="regist-character_character">
      regist form
    </div>
  </article>
</template>

<style scoped>
@layer page {
  .regist-character {
    --margin-size: 8%;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 60%;
    height: calc(100vh - var(--global-header-height));
    margin: 0 var(--margin-size);

  }

  .regist-character_selection {
    display: flex;
    flex-direction: column;
    height: 80%;
  }

  .regist-character_characters {
    flex: 1;
  }
}
</style>

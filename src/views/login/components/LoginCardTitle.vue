<script setup lang='ts'>
import { useI18n } from "vue-i18n";
import { i18nLangModel } from "../../../locals/index";

const { t } = useI18n();
</script>

<template>
  <h2 class="h-reset login-input_title" :data-suffix="t(i18nLangModel.auth.loginTitleSuffix)">
    {{ t(i18nLangModel.auth.title) }}
  </h2>
  <p class="p-reset login-input_subtitle">
    {{ t(i18nLangModel.auth.subtitle) }}
  </p>
</template>

<style scoped>
@layer component {
  .login-input_title {
    position: relative;

    margin-bottom: var(--normal);
    padding-bottom: var(--small);

    font-size: calc(var(--title-size) * var(--font-title-main));

    border-bottom: var(--border);
  }

  .login-input_subtitle {
    margin-bottom: var(--base-margin);
    font-size: var(--font-title-main);
    color: var(--gray-bright-1);
  }
}
</style>

<style scoped>
@import url("../styles/login-input-title.css") layer(component);
</style>

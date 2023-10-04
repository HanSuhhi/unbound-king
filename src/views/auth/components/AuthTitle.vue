<script setup lang='ts'>
import { useI18n } from "vue-i18n";
import { i18nLangModel } from "#/composables/i18n/index";

const { t } = useI18n();
</script>

<template>
  <h2 class="h-reset auth_title" :data-suffix="t(i18nLangModel.auth.loginTitleSuffix)">
    {{ t(i18nLangModel.auth.title) }}
  </h2>
  <p class="p-reset pseudo auth_subtitle line_x_before_all">
    {{ t(i18nLangModel.auth.subtitle) }}
  </p>
</template>

<style scoped>
@layer component {
  .auth_title {
    --right-space: 4rem;

    position: relative;
    padding-right: var(--right-space);
    font-size: calc(var(--title-size) * var(--font-title-main));
    text-align: right;
  }

  .auth_subtitle {
    position: relative;

    width: 100%;
    padding-bottom: var(--small);

    font-size: var(--font-title);
    color: var(--gray-bright-1);
    text-align: right;

  }

  .auth_subtitle::before {
    width: 100%;
  }

}
</style>

<style scoped>
@import url("../styles/auth-title.css") layer(component);
@import url("../styles/auth-subtitle.css") layer(component);
</style>

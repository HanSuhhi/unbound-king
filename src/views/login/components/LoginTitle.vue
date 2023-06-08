<script setup lang='ts'>
import { useI18n } from "vue-i18n";
import { i18nLangModel } from "../../../locals/index";

const { t } = useI18n();
</script>

<template>
  <h2 class="h-reset login_title" :data-suffix="t(i18nLangModel.auth.loginTitleSuffix)">
    {{ t(i18nLangModel.auth.title) }}
  </h2>
  <p class="p-reset pseudo login_subtitle line_x_before_all">
    {{ t(i18nLangModel.auth.subtitle) }}
  </p>
</template>

<style scoped>
@layer component {
  .login_title {
    --right-space: 4rem;

    position: relative;
    padding-right: var(--right-space);
    font-size: calc(var(--title-size) * var(--font-title-main));
    text-align: right;
  }

  .login_subtitle {
    position: relative;

    width: 100%;
    padding-bottom: var(--small);

    font-size: var(--font-title);
    color: var(--gray-bright-1);
    text-align: right;
  }

}
</style>

<style scoped>
@import url("../styles/login-title.css") layer(component);
@import url("../styles/login-subtitle.css") layer(component);
</style>

<script setup lang='ts'>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div class="login-footer pseudo line_x_before_right">
    <p class="p-reset login-footer_word">
      "Of all the things that torture men, beyond question hope is the worst."
      <br><br>"Rights are never granted; they are fought for."
      <br><br>"Rights are never granted; they are fought for."
      <br><br>"Rights are never granted; they are fought for."
      <br><br>"Rights are never granted; they are fought for."
      <br><br>"Rights are never granted; they are fought for."
    </p>
  </div>
</template>

<style scoped>
@layer component {
  .login-footer {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    width: 100%;
    margin-top: var(--large);
    padding-top: calc(var(--normal) * 1.4);
  }

  .login-footer_word {
    overflow: hidden;
    /* stylelint-disable-next-line value-no-vendor-prefix */
    display: -webkit-box;

    margin-top: var(--base-margin);

    color: var(--gray-deep-1);

    -webkit-box-orient: vertical;
    -webkit-line-clamp: 7;
  }

}
</style>

<style scoped>
@import url("../styles/login-footer.css") layer(component);
</style>

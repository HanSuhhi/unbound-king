<script setup lang='ts'>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div class="auth-footer pseudo line_x_before_right">
    <p class="p-reset auth-footer_word">
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
  .auth-footer {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    width: 100%;
    margin-top: var(--large);
    padding-top: calc(var(--normal) * 1.4);
  }

  .auth-footer_word {
    overflow: hidden;
    /* stylelint-disable-next-line value-no-vendor-prefix */
    display: -webkit-box;

    color: var(--gray-deep-1);

    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

}
</style>

<style scoped>
@import url("../styles/auth-footer.css") layer(component);
</style>

<script setup lang='ts'>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div class="login-footer">
    <p class="p-reset login-footer_word">
      "Of all the things that torture men, beyond question hope is the worst."
    </p>
    <p class="p-reset login-footer_word">
      "The greatest achievement a man can make is to prove his own worth through his own efforts."
    </p>
    <p class="p-reset login-footer_word">
      "Rights are never granted; they are fought for."
    </p>
    <div class="login-footer_options">
      <a href="">blog</a>
      <a href="">contributor</a>
      <a href="">help</a>
      <a href="">FAQ</a>
    </div>
  </div>
</template>

<style scoped>
@layer component {
  .login-footer {
    position: relative;

    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    width: 100%;
    height: 100%;
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
    -webkit-line-clamp: 2;
  }

  .login-footer_options {
    position: absolute;
    bottom: var(--base-margin);

    display: flex;
    justify-content: space-around;

    width: 100%;
  }

  .login-footer_options::before {
    content: "";

    position: absolute;
    top: calc(-1 * var(--base-margin));
    right: calc(-1 * var(--login-right));

    width: 140%;
    height: 1px;

    background: linear-gradient(to right,var(--border-color),var(--border-color) 50%,transparent 0,transparent);
    background-size: var(--mini) 1px;

    -webkit-mask:
      linear-gradient(to left,var(--black-bright-2) 80%,transparent),
      linear-gradient(hsl(0deg 0% 0%),hsl(0deg 0% 0%));

    -webkit-mask-composite: destination-in;
    mask-composite: exclude;
  }
}
</style>

<style scoped>
@import url("../styles/login-footer.css") layer(component);
</style>

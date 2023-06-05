<script setup lang='ts'>
import { useI18n } from "vue-i18n";
import TitleButton from "@/components/typeButton/TitleButton.vue";

const { t } = useI18n();
</script>

<template>
  <section class="login-operation">
    <title-button class="login-operation_button" plain>
      <icon class="login-operation_icon" name="github" />
      Github
    </title-button>
  </section>
</template>

<style scoped>
@layer component {
  .login-operation {
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    width: 45%;
    height: calc(100% - var(--base-margin));

    font-size: var(--font-title-main);
  }

  .login-operation_icon {
    margin-right: var(--base-margin);
  }

  .login-operation::before {
    content: "";

    position: absolute;
    top: var(--base-margin);

    width: 100%;
    height: 4px;

    background-color: var(--border-color);

  }

  .login-operation_button {
    width: 100%;
    border-image: linear-gradient(to right, var(--bg-color-sub) , var(--bg-color-main)) 1;
  }
}
</style>

<script setup lang='ts'>
import { NGi, NGrid, useMessage } from "naive-ui";
import TitleButton from "@/components/typeButton/TitleButton.vue";

const message = useMessage();

function loginWithGithub() {
  message.warning("waiting...");
}
</script>

<template>
  <section class="login-third-party pseudo line_y_before_top line_x_after_right">
    <n-grid x-gap="12" :cols="3" :y-gap="4" class="login-third-party_buttons">
      <n-gi v-for="button of 3" :key="button">
        <title-button class="login-third-party_button" plain @click="loginWithGithub">
          <icon class="login-third-party_icon" name="github" />
          Login With Github
        </title-button>
      </n-gi>
    </n-grid>
  </section>
</template>

<style>
@container (max-width: 600px) {
  .login-header {
    color: red !important;
  }
}
</style>

<style scoped>
@layer component {
  .login-third-party {
    --base-margin: var(--normal);

    position: relative;
    padding-top: var(--base-margin);
    padding-bottom: var(--base-margin);
    font-size: var(--large);
  }

  .login-third-party::before {
    top: 0;
    left: calc(-1.5 * var(--large));
    height: 200%;
  }

  .login-third-party::after {
    right: calc(-1 * var(--login-right));
    width: 160%;
    margin: var(--base-margin) 0 0;
  }

  .login-third-party_buttons {
    position: relative;
    width: 100%;
  }

  .login-third-party_icon {
    margin-right: var(--base-margin);
    font-size: calc( var(--large));
  }

  .login-third-party_button {
    width: 100%;
    min-height: 3.5rem;
    border-image: linear-gradient(to right, var(--bg-color-sub) , var(--bg-color-main)) 1;
  }
}
</style>

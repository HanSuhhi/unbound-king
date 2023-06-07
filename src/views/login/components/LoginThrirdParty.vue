<script setup lang='ts'>
import { NGi, NGrid, useMessage } from "naive-ui";
import TitleButton from "@/components/typeButton/TitleButton.vue";

const message = useMessage();

function loginWithGithub() {
  message.warning("waiting...");
}
</script>

<template>
  <section class="login-third-party">
    <n-grid x-gap="12" :cols="3" :y-gap="4" class="login-third-party_buttons">
      <n-gi v-for="button of 3" :key="button">
        <title-button class="login-third-party_button" plain @click="loginWithGithub">
          <icon class="login-third-party_icon" name="github" />
          Login With Github
        </title-button>
      </n-gi>
    </n-grid>
    <div class="login-third-party_hr">
      or
    </div>
  </section>
</template>

<style scoped>
@layer component {
  .login-third-party {
    --base-margin: var(--normal);

    position: relative;
    padding-top: var(--base-margin);
    font-size: var(--large);
  }

  .login-third-party::before {
    content: "";

    position: absolute;
    top: 0;
    left: calc(-1.5 * var(--large));

    width: 1px;
    height: 200%;

    background: linear-gradient(180deg,var(--border-color),var(--border-color) 50%,transparent 0,transparent);
    background-size: 1px var(--mini) ;

    -webkit-mask:
      /* linear-gradient(to top,var(--black-bright-2) 80%,transparent), */
      linear-gradient(to bottom,var(--black-bright-2) 80%,transparent),
      linear-gradient(hsl(0deg 0% 0%),hsl(0deg 0% 0%));

    -webkit-mask-composite: destination-in;
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

  .login-third-party_hr {
    position: relative;
    right: calc(50% - var(--login-right)) ;

    width: 150%;
    height: 1px;
    margin: var(--base-margin) 0 0;

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

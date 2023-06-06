<script setup lang='ts'>
import LoginCardInput from "./LoginCardInput.vue";
import LoginCardTitle from "./LoginCardTitle.vue";
</script>

<template>
  <article class="login-card">
    <login-card-title />
    <login-card-input />
    <!-- <login-card-operations /> -->
  </article>
</template>

<style scoped>
@layer page {
  .login-card {
    --title-size: 1.3;
    --subtitle-size: calc( var(--title-size) * .7);
    --base-margin: calc( var(--normal) * 1.5);

    position: absolute;
    top: 10vh;
    right: 5vw;

    display: flex;
    flex-direction: column;

    padding: var(--large);

    border: var(--border);
    border-radius: var(--border-radius);
  }

}
</style>

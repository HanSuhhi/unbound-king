<script setup lang='ts'>
import LoginCardInput from "./LoginCardInput.vue";
import LoginCardOperations from "./LoginCardOperations.vue";
</script>

<template>
  <article class="login-card">
    <login-card-input />
    <section class="login-card_divide">
      /
    </section>
    <login-card-operations />
  </article>
</template>

<style scoped>
@layer page {
  .login-card {
    position: absolute;
    top: 10vh;
    right: 5vw;

    display: flex;
    align-items: center;

    aspect-ratio: 1.5 / 1;
    width: 40vw;
    padding: var(--base-margin) var(--large);

    border: var(--border);
    border-radius: var(--border-radius);
  }

  .login-card_divide {
    width: 10%;
    margin: 0 var(--large);
    font-size: calc( var(--font-title-main) * 1.3);
    text-align: center;
  }
}
</style>

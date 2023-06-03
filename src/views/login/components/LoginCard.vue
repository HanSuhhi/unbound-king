<script setup lang='ts'>
import LoginCardInput from "./LoginCardInput.vue";
import LoginCardOperations from "./LoginCardOperations.vue";
</script>

<template>
  <article class="login-card">
    <login-card-input />
    <section>/</section>
    <login-card-operations />
  </article>
</template>

<style scoped>
@layer page {
  .login-card {
    display: flex;
    position: relative;
  }
}
</style>

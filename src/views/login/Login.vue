<script setup lang='ts'>
import BgModel from "./components/BgModel.vue";
import Description from "./components/Description.vue";
import LoginCard from "./components/LoginCard.vue";
</script>

<template>
  <div class="login">
    <bg-model />
    <login-card />
    <description />
  </div>
</template>

<style scoped>
@layer page {
  .login {
    position: relative;
    width: 100vw;
    height: calc(100vh - var(--global-header-height));
  }
}
</style>

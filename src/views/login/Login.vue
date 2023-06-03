<script setup lang='ts'>
import { useRouter } from "vue-router";

const router = useRouter();
function login() {
  router.replace({ name: "game-icon" });
}
</script>

<template>
  <type-button @click="login">
    login
  </type-button>
</template>

<style scoped>
</style>

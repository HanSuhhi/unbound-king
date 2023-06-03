<script setup lang='ts'>
import { useRouter } from "vue-router";
import LoginCard from "./components/LoginCard.vue";

const router = useRouter();
function login() {
  router.replace({ name: "game-icon" });
}
</script>

<template>
  <login-card />
</template>

<script setup lang='ts'>
import type { Ref } from "vue";
import { ref } from "vue";
import { useThreeModel } from "../composables/threeModel";

const threeRef = ref<HTMLElement>();

!import.meta.env.SSR && useThreeModel(threeRef as Ref);
</script>

<template>
  <section ref="threeRef" class="login-model" />
</template>

<style scoped>
@layer component {
  .login-model {
    position: relative;
    left: -5rem;
  }
}
</style>

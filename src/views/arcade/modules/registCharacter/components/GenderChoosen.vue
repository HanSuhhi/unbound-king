<script setup lang='ts'>
import { Gender } from "#/server/modules/gender/enums/gender.enum";

const modelValue = defineModel();
</script>

<template>
  <div class="gender-choose">
    <div v-for="gender of Object.keys(Gender)" :key="gender">
      {{ gender }}
    </div>
  </div>
</template>

<style scoped>
</style>

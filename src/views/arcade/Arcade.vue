<script setup lang='ts'>
import { onMounted } from "vue";
import { getStandardIcons } from "../../api/services/assets";

onMounted(async () => {
  const a = await getStandardIcons().send();
  console.log("🚀 ~ file: Arcade.vue:7 ~ onMounted ~ a:", a.data.icons);
});
</script>

<template>
  <div class="asd">
    hello
  </div>
</template>

<style scoped>
</style>

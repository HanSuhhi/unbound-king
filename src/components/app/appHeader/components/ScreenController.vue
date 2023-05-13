<script setup lang='ts'>
import { ref } from "vue";

const isFullScreen = ref(false);

function fullScreen() {
  document.querySelector("body")?.requestFullscreen();
}
function exitFullScreen() {
  document.exitFullscreen();
}
</script>

<template>
  <section
    v-if="isFullScreen"
    class="module-icon"
    cursor-pointer
    @click="fullScreen"
  >
    <icon name="fullscreen" />
  </section>
</template>

<script setup lang='ts'>
import { ref } from "vue";

defineProps<{ enterKeyEvent: KeyEventWithoutFn }>();

const isFullScreen = ref(false);

document.onfullscreenchange = () => isFullScreen.value = !isFullScreen.value;

function fullScreen() {
  document.querySelector("body")?.requestFullscreen();
}
function exitFullScreen() {
  document.exitFullscreen();
}
</script>

<template>
  <section
    v-if="!isFullScreen"
    class="module-icon"
    cursor-pointer
    @click="fullScreen"
  >
    <icon name="fullscreen" />
  </section>
  <section
    v-else
    class="module-icon"
    cursor-pointer
    @click="exitFullScreen"
  >
    <icon name="exitfullscreen" />
  </section>
</template>

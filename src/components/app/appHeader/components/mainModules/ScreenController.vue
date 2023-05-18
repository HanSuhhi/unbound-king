<script setup lang='ts'>
import { isFullScreen } from "../../../../../composables/experience/system";
import { useFullScreen } from "../../composables/fullScreen";
import type { ModuleProp } from "./module-type";
import { toggleFullScreen } from "@/composables/experience/system";

const { enterKeyEvent } = defineProps<ModuleProp>();
useFullScreen(enterKeyEvent);
</script>

<template>
  <section
    class="module-icon"
    cursor-pointer
    @click="toggleFullScreen"
  >
    <icon
      v-if="!isFullScreen()"
      name="fullscreen"
    />
    <icon v-else name="exitfullscreen" />
  </section>
</template>

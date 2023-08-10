<script setup lang='ts'>
import { key_regist_character } from "./composables/character";
import KeyEventButton from "@/components/typeButton/KeyEventButton.vue";

const [confirm] = key_regist_character();
</script>

<template>
  <div class="">
    <key-event-button :key-event="confirm!" />
  </div>
</template>

<style scoped>
@layer page {

}
</style>

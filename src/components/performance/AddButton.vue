<script setup lang='ts'>
import type { Ref } from "vue";
import { inject } from "vue";
import TypeButton from "../typeButton/TypeButton.vue";

const modal = inject<Ref<boolean>>("modal")!;
</script>

<template>
  <type-button @click="modal = true">
    新建
  </type-button>
</template>

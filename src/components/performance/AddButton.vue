<script setup lang='ts'>
import TypeButton from "../typeButton/TypeButton.vue";
import { getCommonDialog } from "@/composables/components/commonDialog";

const { updateModal } = getCommonDialog();
</script>

<template>
  <type-button @click="updateModal(true)">
    新建
  </type-button>
</template>

<script setup lang='ts'>
import TypeButton from "../typeButton/TypeButton.vue";
import { getCommonDialog } from "@/composables/components/commonDialog";

const { modal } = getCommonDialog();
</script>

<template>
  <type-button @click="modal = true">
    新建
  </type-button>
</template>

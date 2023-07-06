<script setup lang='ts'>
import type { AlertProps } from "naive-ui";
import { NAlert } from "naive-ui";

withDefaults(defineProps<{
  type?: AlertProps["type"]
}>(), {
  type: "warning"
});
</script>

<template>
  <n-alert title="Default 类型" :type="type" closable>
    <template #icon>
      <n-icon>
        <ios-airplane />
      </n-icon>
    </template>
  </n-alert>
</template>

<style scoped>
</style>

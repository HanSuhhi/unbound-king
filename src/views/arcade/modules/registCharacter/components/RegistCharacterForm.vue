<script setup lang='ts'>
import type { FormInst } from "naive-ui";
import { NForm } from "naive-ui";
import { ref } from "vue";

const FormRef = ref<FormInst | null>(null);

const formValue = ref();
</script>

<template>
  <n-form
    ref="FormRef"
    inline
    :label-width="80"
    :model="formValue"
    :rules="rules"
    :size="size"
  >
    <n-form-item label="姓名" path="user.name">
      <n-input v-model:value="formValue.user.name" placeholder="输入姓名" />
    </n-form-item>
  </n-form>
</template>

<style scoped>
</style>

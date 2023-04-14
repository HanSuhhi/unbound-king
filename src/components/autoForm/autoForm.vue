<script lang="ts" setup>
import { ref } from "vue";
import type { FormInst } from "naive-ui";
import { FormRules, NForm, NFormItem, NInput, NInputNumber, NSelect } from "naive-ui";
import FormIcon from "./components/FormIcon.vue";
import FormTranslator from "./components/FormTranslator.vue";
import { defineAutoFormModel } from "./composable/model";
import { defineAutoFormRules } from "./composable/rules";

const props = defineProps<{ config: AutoformItem[]; params?: any }>();

const FormRef = ref<FormInst>();

const { rules } = defineAutoFormRules(props);
const { model } = defineAutoFormModel(props);
</script>

<template>
  <n-form ref="FormRef" label-placement="left" class="auto-form" :model="model" :rules="rules as FormRules">
    <template v-for="formItem in config" :key="formItem.key">
      <template v-if="!formItem.hide">
        <n-form-item :class="{ 'form-inline-flex': formItem.type === 'number' }" :label="formItem.title" :path="formItem.key" :required="formItem.required">
          <template v-if="formItem.type === 'text' || formItem.type === 'textarea'">
            <n-input v-model:value="model[formItem.key]" :type="formItem.type" :disabled="formItem.disabled" :placeholder="formItem.placeholder || ''" />
          </template>
          <template v-if="formItem.type === 'selecter'">
            <n-select v-model:value="model[formItem.key]" :options="formItem.options!.range?.map(option => ({ value: option[0], label: option[1] }))" :disabled="formItem.disabled" :placeholder="formItem.placeholder || ''" />
          </template>
          <template v-if="formItem.type === 'number'">
            <n-input-number v-model:value="model[formItem.key]" :disabled="formItem.disabled" :min="formItem.limit?.min" :max="formItem.limit?.max" clearable />
          </template>
          <template v-if="formItem.type === 'icon'">
            <form-icon v-model="model[formItem.key]" />
          </template>
          <template v-if="formItem.type === 'translator'">
            <form-translator v-model="model[formItem.key]" />
          </template>
        </n-form-item>
      </template>
    </template>
    <n-form-item>
      <slot name="footer" :form="FormRef" :data="model" />
    </n-form-item>
  </n-form>
</template>

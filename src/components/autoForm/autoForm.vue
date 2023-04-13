<script lang="ts" setup>
import type { FormInstance } from "element-plus";
import { ref, watch } from "vue";
import FormIcon from "./components/FormIcon.vue";
import FormTranslator from "./components/FormTranslator.vue";
import { defineAutoFormModel } from "./composable/model";
import { defineAutoFormRules } from "./composable/rules";

const FormRef = ref<FormInstance>();

const props = defineProps<{ config: AutoformItem[]; params?: any }>();
const { rules } = defineAutoFormRules(props);
const { model, init } = defineAutoFormModel(props);

function reset() {
  if (!FormRef.value) return;
  FormRef.value.resetFields();
}
function resetForm() {
  reset();
  model.value = init();
}

watch(() => props.config, resetForm, { deep: true });
</script>
<template>
  <el-form ref="FormRef" class="auto-form" :model="model" :rules="rules" :validate-on-rule-change="false">
    <template v-for="formItem in config" :key="formItem.key">
      <template v-if="!formItem.hide">
        <el-form-item :class="{ 'form-inline-flex': formItem.type === 'number' }" :label="formItem.title" :prop="formItem.key" :required="formItem.required">
          <el-input v-if="formItem.type === 'input' || formItem.type === 'textarea'" v-model="model[formItem.key]" :type="formItem.type" :disabled="formItem.disabled" :placeholder="formItem.placeholder || ''" />
          <el-select v-if="formItem.type === 'selecter'" v-model="model[formItem.key]" :disabled="formItem.disabled" :placeholder="formItem.placeholder || ''">
            <el-option v-for="option in formItem.options!.range" :key="option[0] || ''" :label="option[1] || ''" :value="option[0] || ''" />
          </el-select>
          <el-input-number v-if="formItem.type === 'number'" v-model="model[formItem.key]" :disabled="formItem.disabled" :min="formItem.limit?.min" :max="formItem.limit?.max" />
          <form-icon v-if="formItem.type === 'icon'" v-model="model[formItem.key]" />
          <form-translator v-if="formItem.type === 'translator'" v-model="model[formItem.key]" />
        </el-form-item>
      </template>
    </template>
    <el-form-item>
      <slot name="footer" :form="FormRef" :data="model" />
    </el-form-item>
  </el-form>
</template>

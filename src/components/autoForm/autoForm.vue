
<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus';
import { computed, ref, watch, withDefaults } from 'vue';

const FormRef = ref<FormInstance>();

const props = withDefaults(defineProps<{ config: AutoformItem[] }>(), {
  config(props) {
    return [{
      key: "name",
      type: 'input',
      title: "姓名"
    }];
  },
});

function reset ()  {
  if (!FormRef.value) return;
  FormRef.value.resetFields();
};
function init() {
  model.value = props.config.reduce((values, { key, default: defaultValue }) => ({ ...values, [key]: defaultValue || '' }), {});
}
function resetForm() {
  reset();
  init();
}
const model = ref<Record<string, string>>(props.config.reduce((values, { key, default: defaultValue }) => ({ ...values, [key]: defaultValue || '' }), {}));
watch(() => props.config, resetForm, {deep: true});

const rules = computed(() => {
  const rule:FormRules = {};
  props.config.forEach(formItem => {
    if (formItem.rules) rule[formItem.key] = formItem.rules;
  });
  return rule;
});
</script>
<template>
  <el-form ref="FormRef"
           :model="model"
           :rules="rules"
           :validate-on-rule-change="false"
           size="small"
  >
    <el-form-item v-for="formItem in config" :key="formItem.key" label-width="7rem" :label="formItem.title" :prop="formItem.key" :required="formItem.required">
      <el-input v-if="formItem.type === 'input'" v-model="model[formItem.key]" :disabled="formItem.disabled" :placeholder="formItem.placeholder || ''" />
      <el-select v-if="formItem.type === 'selecter'" v-model="model[formItem.key]" :disabled="formItem.disabled" :placeholder="formItem.placeholder || ''">
        <el-option v-for="text, index in formItem.options!.range"
                   :key="text"
                   :label="formItem.options?.titleRange?.[index] || text"
                   :value="text"
        />
      </el-select>
    </el-form-item>
    <el-form-item>
      <slot name="footer" :form="FormRef" :data="model" />
    </el-form-item>
  </el-form>
</template>


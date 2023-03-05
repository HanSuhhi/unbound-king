
<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus';
import { computed, ref, withDefaults } from 'vue';

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

const model = computed<Record<string, string>>(() => {
  return props.config.reduce((values, { key, default: defaultValue }) => ({ ...values, [key]: defaultValue || '' }), {});
});

const rules = computed(() => {
  const rule:FormRules = {};
  props.config.forEach(formItem => {
    if (formItem.rules) rule[formItem.key] = formItem.rules;
  });
  return rule;
});

// const submitForm = async (formEl: FormInstance | undefined) => {
//   if (!formEl) return;
//   await formEl.validate((valid, fields) => {
//     if (valid) {
//       console.log('submit!');
//     } else {
//       console.log('error submit!', fields);
//     }
//   });
// };

// const resetForm = () => {
//   if (!Fo) return;
//   Fo.resetFields();
// };

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
      <el-select v-else-if="formItem.type === 'selecter'" v-model="model[formItem.key]" :disabled="formItem.disabled" :placeholder="formItem.placeholder || ''">
        <el-option v-for="text, index in formItem.options!.range"
                   :key="text"
                   :label="formItem.options?.titleRange?.[index] || text"
                   :value="text"
        />
      </el-select>
    </el-form-item>
  </el-form>
</template>


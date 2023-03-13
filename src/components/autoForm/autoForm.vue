<script lang="ts" setup>
import type { FormInstance, FormRules } from "element-plus";
import { computed, ref, watch, withDefaults } from "vue";
import FormIcon from "./components/FormIcon.vue";
import FormTranslator from "./components/FormTranslator.vue";

const FormRef = ref<FormInstance>();

const props = withDefaults(defineProps<{ config: AutoformItem[] }>(), {
  config(props) {
    return [
      {
        key: "name",
        type: "input",
        title: "姓名",
      },
    ];
  },
});

function reset() {
  if (!FormRef.value) return;
  FormRef.value.resetFields();
}
function init() {
  return props.config.reduce((values, { key, default: defaultValue }) => {
    if (key === "translator") {
      const defaultTranslator: Translator = defaultValue || {
        name: "",
        title: "",
      };

      return {
        ...values,
        [key]: defaultTranslator,
      };
    }
    return { ...values, [key]: defaultValue || "" };
  }, {});
}
function resetForm() {
  reset();
  model.value = init();
}

const model = ref<Record<string, any>>(init());

watch(() => props.config, resetForm, { deep: true });

const rules = computed(() => {
  const rule: FormRules = {};
  props.config.forEach((formItem) => {
    if (formItem.rules) rule[formItem.key] = formItem.rules;
  });
  return rule;
});
</script>
<template>
  <el-form ref="FormRef" :model="model" :rules="rules" :validate-on-rule-change="false">
    <el-form-item v-for="formItem in config" :key="formItem.key" :label="formItem.title" :prop="formItem.key" :required="formItem.required">
      <template v-if="!formItem.hide">
        <el-input v-if="formItem.type === 'input'" v-model="model[formItem.key]" :disabled="formItem.disabled" :placeholder="formItem.placeholder || ''" />
        <el-select v-if="formItem.type === 'selecter'" v-model="model[formItem.key]" :disabled="formItem.disabled" :placeholder="formItem.placeholder || ''">
          <el-option v-for="option in formItem.options!.range" :key="option.name" :label="option.title" :value="option.name" />
        </el-select>
        <form-icon v-if="formItem.type === 'icon'" v-model="model[formItem.key]" />
        <form-translator v-if="formItem.type === 'translator'" v-model="model[formItem.key]" />
      </template>
    </el-form-item>
    <el-form-item>
      <slot name="footer" :form="FormRef" :data="model" />
    </el-form-item>
  </el-form>
</template>

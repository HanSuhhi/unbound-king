<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import type { FormInst } from "naive-ui";
import { FormRules, NForm, NFormItem, NInput, NInputNumber, NSelect, NSwitch } from "naive-ui";
import { deepImmediate } from "../../composables/plus/watch";
import FormIcon from "./components/FormIcon.vue";
import FormTranslator from "./components/FormTranslator.vue";
import { defineAutoFormModel } from "./composable/model";
import { defineAutoFormRules } from "./composable/rules";
import FormChase from "./components/FormChase.vue";
import FormColor from "./components/FormColor.vue";
import FormMinMax from "./components/FormMinMax.vue";
import { DATA_PackageNames } from "@/modules/packageName/data/packageName.data";

interface Prop { config: AutoformItem[]; params?: any; hotUpdate?: boolean }
// interface Emit

const props = defineProps<Prop>();
const emits = defineEmits<{
  "updateData": [model: any, form: FormInst]
}>();

const FormRef = ref<FormInst>();

const { rules } = defineAutoFormRules(props);
const { model } = defineAutoFormModel(props);

onMounted(() => {
  if (props.hotUpdate) {
    watch(model, (newModel) => {
      emits("updateData", newModel, FormRef.value!);
    }, deepImmediate);
  }
});
</script>

<template>
  <n-form ref="FormRef" label-placement="left" class="auto-form" :model="model" :rules="rules as FormRules">
    <template v-for="formItem in config" :key="formItem.key">
      <template v-if="!formItem.hide">
        <n-form-item :class="{ 'form-inline-flex': formItem.type === 'number' }" :label="formItem.title" :path="formItem.key" :required="formItem.required">
          <template v-if="formItem.type === 'text' || formItem.type === 'textarea'">
            <n-input v-model:value="model[formItem.key]" :type="formItem.type" :disabled="formItem.disabled" :placeholder="formItem.placeholder || ''" />
          </template>
          <template v-if="formItem.type === 'from'">
            <n-input :value="DATA_PackageNames[model[formItem.key]]" :disabled="formItem.disabled" readonly />
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
          <template v-if="formItem.type === 'chase'">
            <form-chase v-model="model[formItem.key]" />
          </template>
          <template v-if="formItem.type === 'color'">
            <form-color v-model="model[formItem.key]" />
          </template>
          <template v-if="formItem.type === 'minmax'">
            <form-min-max v-model="model[formItem.key]" :limit="formItem.limit" />
          </template>
          <template v-if="formItem.type === 'switch'">
            <n-switch v-model:value="model[formItem.key]" />
          </template>
        </n-form-item>
      </template>
    </template>
    <n-form-item>
      <slot name="footer" :form="FormRef" :data="model" />
    </n-form-item>
  </n-form>
</template>

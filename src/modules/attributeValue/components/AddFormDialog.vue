<script setup lang='ts'>
import TitleCard from '@/components/titleCard/TitleCard';
import { transformTypeToForm } from '@/composables/typeToForm';
import type { useCsssDialog } from 'csss-ui';
import { CDialog } from 'csss-ui';
import { inject, computed, watchEffect } from 'vue';
import type {Ref} from 'vue';
import autoForm from '@/components/autoForm/autoForm.vue';
import typeString from '../attribute-value-type.d.ts?raw';
import { withFormDetail } from '@/composables/formDetail';

const type = inject<Ref<AttributeValue['type']>>('type');

const formConfig = computed(() => withFormDetail<AttributeValue>(transformTypeToForm(typeString), {
  key: {
    title: "关键字",
  },
  title: {
    title: "标题",
  },
  description: {
    title: "描述",
  },
  icon: {
    title: "icon",
  },
  type: {
    options: {
      titleRange: ['基础属性值', '进阶属性值', '特殊属性值'],
    },
    disabled: true,
    title: "类型",
    default: type?.value || "",
  }
}));

watchEffect(() => {

  console.log('formConfig: ', formConfig);
});

const state = inject<ReturnType<typeof useCsssDialog>['state']>("dialog");
const Dialog = inject("Dialog");

const typeTitle = computed(() => {
  switch (type!.value) {
    case 'base':
      return '基础属性值';
    case 'special':
      return '特殊属性值';
    default:
    case 'advanced':
      return '进阶属性值';
  }
});

</script>

<template>
  <c-dialog ref="Dialog">
    <title-card class="form-dialog">
      <template #title>
        <p class="p-reset form-dialog_title">
          {{ typeTitle }}表
        </p>
      </template>
      <template #subtitle>
        <div class="i-mdi-close-thick" @click="state!.show = false" />
      </template>
      <auto-form :config="formConfig" />
    </title-card>
  </c-dialog>
</template>

<style scoped>
.form-dialog {
  cursor: auto;
}

.i-mdi-close-thick {
  cursor: pointer;
}

.i-mdi-close-thick:hover {
  color: var(--main-color);
}

.form-dialog_title {
  font-size: var(--font-body);
}
</style>
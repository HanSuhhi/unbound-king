<script setup lang='ts'>
import alert from '@/components/alert/alert';
import ValueList from './ValueList.vue';
import { computed, provide, ref } from 'vue';
import addFormDialog from "./AddFormDialog.vue";
import { useCsssDialog } from 'csss-ui';
import { storeToRefs } from 'pinia';
import { useAttributeValueStore } from '../store/attribute-value.store';

const { attributeValues } = storeToRefs(useAttributeValueStore());

const baseAttributes = computed(() => attributeValues.value.filter(attribute => attribute.type === 'base'));
const advancedAttributes = computed(() => attributeValues.value.filter(attribute => attribute.type === 'advanced'));
const specialAttributes = computed(() => attributeValues.value.filter(attribute => attribute.type === 'special'));

const {COMP, state } = useCsssDialog({state: { toBox: ".attribute-value"}, style: {classList: {dialog: ['', 'router-view-dialog']}}});
const dialogType = ref<AttributeValue['type']>("base");

provide("dialog", state);
provide("Dialog", COMP);
provide("type", dialogType);
</script>

<template>
  <add-form-dialog />
  <div class="value-box">
    <alert class="value-box_alert">
      属性值，是作用于角色各项参数判定的直接数值，包括基础属性值，进阶属性值和特殊属性值。
    </alert>
    <!-- <c-tabs> -->
    <!-- <template #list></template> -->
    <article class="value-box_main">
      <value-list class="value-box_list" type="base" :attribute-values="baseAttributes">
        <template #title>
          基础属性值
        </template>
      </value-list>
      <value-list class="value-box_list" type="advanced" :attribute-values="advancedAttributes">
        <template #title>
          进阶属性值
        </template>
      </value-list>
      <value-list class="value-box_list" type="special" :attribute-values="specialAttributes">
        <template #title>
          特殊属性值
        </template>
      </value-list>
    </article>
    <!-- </c-tabs> -->
  </div>
</template>

<style scoped>
.value-box {
  margin-right: var(--base-margin);
}

.value-box_list {
  width: calc(100% / 3);
}

.value-box_alert {
  box-sizing: border-box;
}

.value-box_main {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>
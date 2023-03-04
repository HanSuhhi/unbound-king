<script setup lang='ts'>
import ValueItem from './ValueItem.vue';
import { defineItemsSearch } from '../composables/ItemsSearch';
import typeString from '../attribute-value-type.d.ts?raw';
import { transformTypeToForm } from '@/composables/typeToForm';

const { COMP: Input} = defineItemsSearch();
defineProps<{attributeValues: AttributeValue[]}>();

const formConfig = transformTypeToForm(typeString);

</script>

<template>
  <section class="value-list">
    <header class="value-list_header">
      <div class="value-list_side">
        <slot name="title" />
        <div class="value-list_total">4</div>
      </div>
      <div class="value-list_side">
        <c-input ref="Input" class="value-list_search">
          <template #header>
            <div class="i-ri-search-eye-fill" />
          </template>
        </c-input>
      </div>
    </header>
    <main class="value-list_main">
      <ValueItem v-for="attributeValue in attributeValues" :key="attributeValue.key" :attribute-value="attributeValue" />
    </main>
    <footer class="value-list_footer">
      <div class="i-ic-outline-plus" style="margin-right: var(--mini);" />
      添加属性值...
    </footer>
  </section>
</template>

<style scoped>
.value-list_footer {
  display: flex;
  align-items: center;
  width: fit-content;
  text-decoration: underline;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: color var(--flash) ease-out;
}

.value-list_footer:hover {
  color: var(--main-color);
}

.value-list_search {
  width: 70%;
  padding: var(--small);
  border: none;
  border-bottom: var(--border);
  border-radius: 0;
  transition: all var(--transition-prop);
}

.value-list_search[data-active] {
  width: 100%;
}

.value-list_search :deep(.value-list_search_icon) {
  margin-right: var(--small);
}

.value-list {
  margin: var(--base-margin);
}

.value-list_main {
  margin: var(--base-margin) 0;
}

.value-list_header {
  display: flex;
  justify-content: space-between;
  color: var(--gray-bright-2);
  filter: brightness(1.2);
}

.value-list_side {
  display: flex;
  align-items: center;
}

.value-list_side:last-child {
  display: flex;
  justify-content: flex-end;
}

.value-list_total {
  --padding-size: 1.2;

  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(var(--font-body-small) * var(--padding-size));
  margin-left: var(--mini);
  color: var(--black);
  font-weight: bolder;
  font-size: var(--font-body-small);
  background-color: var(--gray-bright-1);
  border-radius: var(--border-radius);
}
</style>


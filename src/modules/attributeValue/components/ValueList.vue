<script setup lang="ts">
import Icon from "@/components/Icon.vue";
import type { useCsssDialog } from "csss-ui";
import { CInput } from "csss-ui";
import { throttle } from "lodash-es";
import type { Ref } from "vue";
import { inject, nextTick, ref, watch } from 'vue';
import { defineItemsSearch } from "../composables/ItemsSearch";
import { onBeforeEnter, onEnter, onLeave } from '../composables/transitionFunc';
import ValueItem from "./ValueItem.vue";
import NumberMark from "@/components/NumberMark.vue";

const props = defineProps<{ attributeValues: AttributeValue[]; type: AttributeValue["type"] }>();
const modelAttributeValues = ref(props.attributeValues);

const { COMP: Input, state: InputState } = defineItemsSearch();
watch(() => InputState.value?.model, throttle((input) => {
  modelAttributeValues.value = props.attributeValues.filter(attributeValue => {
    if (attributeValue.translator.key.includes(input)) return true;
    if (attributeValue.translator.title.includes(input)) return true;
    if (attributeValue.description.includes(input)) return true;
    return false;
  });
}, Number(import.meta.env.ANIMATION_DURATION)));

const state = inject<ReturnType<typeof useCsssDialog>["state"]>("dialog");
const type = inject<Ref<AttributeValue["type"]>>("type");

const openDialog = () => {
  state!.value.show = true;
  type!.value = props.type;
};

</script>

<template>
  <section class="value-list">
    <header class="value-list_header">
      <div class="value-list_side">
        <slot name="title" />
        <number-mark>{{ modelAttributeValues.length }}</number-mark>
      </div>
      <div class="value-list_side">
        <c-input ref="Input" class="value-list_search">
          <template #header>
            <icon name="search-eye" />
          </template>
        </c-input>
      </div>
    </header>
    <transition-group tag="main" class="value-list_main" :css="false"
                      @before-enter="onBeforeEnter"
                      @enter="onEnter"
                      @leave="onLeave"
    >
      <ValueItem v-for="attributeValue, index in modelAttributeValues" :key="attributeValue.id" class="value-list_item"
                 :attribute-value="attributeValue" :data-index="index"
      />
    </transition-group>
    <footer class="value-list_footer" @click="openDialog()">
      <icon name="plus" style="margin-right: var(--mini);" />
      添加属性值...
    </footer>
  </section>
</template>

<style scoped>
.value-list {
  display: flex;
  flex-direction: column;
  padding: var(--base-margin);
}

.value-list_footer {
  display: flex;
  align-items: center;
  width: fit-content;
  text-decoration: underline;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: color var(--flash) ease-out;
}

.value-list_item {
  min-width: auto;
  margin-bottom: var(--base-margin);
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

.value-list_main {
  flex: 1;
  box-sizing: border-box;
  height: 100%;
  overflow: auto;
}

.value-list_header {
  display: flex;
  justify-content: space-between;
  padding-bottom: var(--base-margin);
  color: var(--gray-bright-2);
  filter: brightness(1.2);
}

.value-list_side {
  display: flex;
  align-items: center;
  white-space: nowrap;
}

.value-list_side:last-child {
  display: flex;
  justify-content: flex-end;
}

</style>

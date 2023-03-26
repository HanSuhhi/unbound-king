<script setup lang="ts">
import Icon from "@/components/Icon.vue";
import NumberMark from "@/components/NumberMark.vue";
import SearchInput from '@/components/SearchInput.vue';
import { onBeforeEnter, onEnter, onLeave } from "@/composables/transition/transitionFunc";
import type { useCsssDialog } from "csss-ui";
import type { Ref } from "vue";
import { inject, ref } from "vue";
import ValueItem from "./ValueItem.vue";

const props = defineProps<{ attributeValues: AttributeValue[]; type: AttributeValue["type"] }>();
const modelAttributeValues = ref(props.attributeValues);

const watchEvent = (input: string) => {
  modelAttributeValues.value = props.attributeValues.filter((attributeValue) => {
    if (attributeValue.translator.key.includes(input)) return true;
    if (attributeValue.translator.title.includes(input)) return true;
    if (attributeValue.description.includes(input)) return true;
    return false;
  });
};

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
        <search-input :watch-event="watchEvent" />
      </div>
    </header>
    <transition-group tag="main" class="value-list_main" :css="false" @before-enter="onBeforeEnter" @enter="onEnter"
      @leave="onLeave">
      <ValueItem v-for="(attributeValue, index) in modelAttributeValues" :key="attributeValue.id" class="value-list_item"
        :attribute-value="attributeValue" :data-index="index" />
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

<script setup lang="ts">
import { ref } from "vue";
import TitleCardListItem from "./TitleCardListItem.vue";
import NumberMark from "@/components/NumberMark.vue";
import SearchInput from "@/components/inputs/SearchInput.vue";
import { onBeforeEnter, onEnter, onLeave } from "@/composables/transition/transitionFunc";

const props = defineProps<{ data: BaseItem[] }>();
const modelValues = ref(props.data);

function watchEvent(input: string) {
  modelValues.value = props.data.filter((item) => {
    if (item.translator[0].includes(input)) return true;
    if (item.translator[1].includes(input)) return true;
    if (item.description.includes(input)) return true;
    return false;
  });
}
</script>

<template>
  <section class="value-list">
    <header class="value-list_header">
      <div class="value-list_side">
        <slot name="title" />
        <number-mark>{{ modelValues.length }}</number-mark>
      </div>
      <div class="value-list_side">
        <search-input :watch-event="watchEvent" />
      </div>
    </header>
    <transition-group class="value-list_main" tag="main" :css="false" @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave">
      <title-card-list-item v-for="(item, index) of modelValues" :key="item.translator[0]" class="value-list_item" :data="item" :data-index="index" />
    </transition-group>
    <footer class="value-list_footer">
      <slot name="footer" />
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
  width: 100%;
  text-decoration: underline;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: color var(--transition-prop);
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

<script setup lang='ts'>
import Icon from '@/components/Icon.vue';
import { storeToRefs } from 'pinia';
import { useResultTypes } from '../composables/resultTypes';
import { useEthnicityDesignStore } from '../store/ethnicityDesign.store';

const { DATA_Types } = useResultTypes();
const { currentType } = storeToRefs(useEthnicityDesignStore());
</script>

<template>
  <article class="result-type" :style="{ '--index': currentType }">
    <section v-for="type, index in DATA_Types" :key="type" class="result-type_item" @click="currentType = index">
      {{ type }}
    </section>
    <div class="result-type_setting result-type_item">
      <Icon icon="setting" />
    </div>
  </article>
</template>

<style scoped>
.result-type {
  display: flex;
  height: 100%;
  padding-left: var(--base-margin);
  white-space: nowrap;
  border-bottom: var(--border);
}

.result-type>* {
  display: flex;
  place-items: center;
}

.result-type_item {
  position: relative;
  padding: var(--small) var(--large);
  cursor: pointer;
}

.result-type_item:first-child::before {
  position: absolute;
  bottom: 0;
  left: calc(var(--index) * 100%);
  width: 100%;
  height: 1px;
  background-color: var(--main-color);
  transition: left var(--transition-prop);
  content: "";
}

.result-type_setting {
  margin-left: auto;
}
</style>
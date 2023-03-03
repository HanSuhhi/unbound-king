<script setup lang='ts'>
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { defineTabs } from '../composables/mainTabs';
import { useDestinyStore } from '../store/destiny.store';
import DestinyItemCard from './DestinyItemCard.vue';
import DestinyDetail from "./DestinyDetail.vue";

const { COMP, state, read, style } = defineTabs();
const { destinies, tabsIndex: _tabsIndex } = storeToRefs(useDestinyStore());
const tabsIndex = computed({
  get: () => state.value?.active || 0,
  set: (index) => {
    style.value.panelTransition = index > state.value.active ? "slide-left" : "slide-right";
    (state.value.active = index);
    _tabsIndex.value = index;
  },
});

const changeTab = (index: number) => tabsIndex.value = index;
</script>

<template>
  <c-tabs ref="COMP" class="destiny-main">
    <template #list>
      <DestinyItemCard v-for="(destiny, index) in destinies" :key="destiny.key"
        :class="{ 'destiny-main_tabitem': true, 'destiny-main_last': index === destinies.length - 1, [`destiny-main_${destiny.key}`]: true }"
        :destiny="destiny" :index="index" @triggered="changeTab(index)" />
    </template>
    <template v-for="panel, index of read?.panels" :key="panel" #[panel]>
      <destiny-detail :destiny="destinies[index]" />
    </template>
  </c-tabs>
</template>

<style>
.destiny-main {
  --clip-size: var(--base-margin);

  margin-right: var(--clip-size);
}

.destiny-main_last {
  margin-right: var(--clip-size) !important;
}
</style>
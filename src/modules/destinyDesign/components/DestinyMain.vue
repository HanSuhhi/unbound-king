<script setup lang="ts">
import { defineTabs } from "../composables/mainTabs";
import data from "../data/destiny.data";
import DestinyDescription from "./DestinyDescription";
import DestinyDetail from "./DestinyDetail.vue";
import DestinyText from "@/components/DestinyText.vue";

const { COMP, read, state } = defineTabs();
</script>

<template>
  <article class="destiny-main">
    <destiny-description />
    <base-tabs ref="COMP" class="destiny-main_tabs">
      <template #list>
        <template v-for="destiny, index of data" :key="destiny.key">
          <destiny-text class="destiny-main_tab" :destiny="destiny" :is-choosed="state?.active === index" />
        </template>
      </template>
      <template v-for="(panel, index) of read?.panels" :key="panel" #[panel]>
        <destiny-detail :index="index" />
      </template>
    </base-tabs>
  </article>
</template>

<style scoped>
.destiny-main {
  display: flex;
  flex-direction: column;
  height: calc(var(--main-height) - var(--base-margin));
  overflow: hidden;
}

.destiny-main_tabs {
  --clip-size: var(--base-margin);

  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: auto;
}

.destiny-main_tab {
  padding: var(--small)  calc(var(--large) * 0.7);
  border: var(--border);
  border-bottom: 0;
  border-left: 0;

  &:first-child {
    border-left: var(--border);
  }
}
</style>

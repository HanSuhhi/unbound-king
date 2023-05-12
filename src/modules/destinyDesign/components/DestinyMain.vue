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
@layer component {
  .destiny-main {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: calc(var(--main-height) - var(--base-margin));
  }

  .destiny-main_tabs {
    --clip-size: var(--base-margin);

    overflow: auto;
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  .destiny-main_tab {
    padding: var(--small)  calc(var(--large) * 0.7);
    border: var(--border);
    border-bottom: 0;
    border-left: 0;
  }

  .destiny-main_tab:first-child {
    border-left: var(--border);
  }
}
</style>

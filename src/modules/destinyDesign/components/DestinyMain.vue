<script setup lang="ts">
import { defineTabs } from "../composables/mainTabs";
import DestinyDescription from "./DestinyDescription";
import DestinyTabs from "./DestinyTabs.vue";
import DestinyDetail from "./DestinyDetail.vue";
import { DATA } from "@/composables/data";

const { COMP, read, state } = defineTabs();
</script>

<template>
  <article class="destiny-main">
    <destiny-description />
    <base-tabs ref="COMP" class="destiny-main_tabs">
      <template #list>
        <template v-for="destiny, index of DATA.DATA_Destiny" :key="destiny.key">
          <destiny-tabs class="destiny-main_tab" :destiny="destiny" :is-choosed="state?.active === index" />
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
</style>

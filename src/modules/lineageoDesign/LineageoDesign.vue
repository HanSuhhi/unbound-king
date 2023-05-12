<script setup lang='ts'>
import LineageoMain from "./components/LineageoMain.vue";
import { parseImportModule } from "@/composables/ci/importModule";
import TabsDesign from "@/components/tabs/TabsDesign.vue";

const data = parseImportModule(import.meta.glob("./data/*.data.ts", { eager: true }));
</script>

<template>
  <tabs-design name="lineageo-design" :data="data">
    <lineageo-main />
  </tabs-design>
</template>

<style scoped>
@page {
  .lineageo-design {
    height: 100%;
  }

  :deep(.lineageo-design_panels),
  :deep(.lineageo-design_panel) {
    height: 100%;
  }

  :deep(.lineageo-design_panel) {
    position: relative;
    top: var(--base-margin);
    height: calc(100% - 2 *  var(--base-margin));
  }
}
</style>

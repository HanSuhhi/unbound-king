<script setup lang='ts'>
import AmbitionMain from "./comopnents/AmbitionMain.vue";
import { parseImportModule } from "@/composables/ci/importModule";
import TabsDesign from "@/components/tabs/TabsDesign.vue";
import "./styles/tabs.css";

const data = parseImportModule(import.meta.glob("./data/*.ambition.ts", { eager: true }));
</script>

<template>
  <tabs-design name="ambition-design" :data="data">
    <ambition-main />
  </tabs-design>
</template>

<script setup lang="ts">
import { parseImportModule } from "../../composables/ci/importModule";
import IconDashboard from "./components/IconDashboard.vue";
import TabsDesign from "@/components/tabs/TabsDesign.vue";
import "./game-icon.css";

const data = parseImportModule(import.meta.glob("./data/*.data.ts", { eager: true }));
</script>

<template>
  <tabs-design name="tabs-design" :data="data" unocss>
    <icon-dashboard />
  </tabs-design>
</template>

<style scoped>
.game-icon {
  transition: all var(--transition-prop);
}
</style>

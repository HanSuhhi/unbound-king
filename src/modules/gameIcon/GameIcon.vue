<script setup lang="ts">
import { parseImportModule } from "../../composables/ci/importModule";
import IconDashboard from "./components/IconDashboard.vue";
import TabsDesign from "@/components/tabs/TabsDesign.vue";
import "./game-icon.css";

const data = parseImportModule(import.meta.glob("./data/*.data.ts", { eager: true }));
</script>

<template>
  <tabs-design name="game-icon" :data="data">
    <icon-dashboard />
  </tabs-design>
</template>

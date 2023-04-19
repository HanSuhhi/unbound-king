<script setup lang="ts">
import { parseImportModule } from "../../composables/ci/importModule";
import TraitDashboard from "./components/TraitDashboard.vue";
import TabsDesign from "@/components/tabs/TabsDesign.vue";
import Alert from "@/components/alert/alert";

const data = parseImportModule(import.meta.glob("./data/*.data.ts", { eager: true }));
</script>

<template>
  <tabs-design name="personality-design" :data="data">
    <template #alert>
      <alert class="trait-main_alert">
        类似于个性，但个性是唯一的且会对剧情对话产生影响。但特征不会，且分正面特征和负面特征。
      </alert>
    </template>
    <trait-dashboard />
  </tabs-design>
</template>

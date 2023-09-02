<script setup lang="ts">
import { parseImportModule } from "../../composables/ci/importModule";
import personalityDashboard from "./components/PersonalityDashboard.vue";
import TabsDesign from "@/components/tabs/TabsDesign.vue";
import Alert from "@/components/Alert.vue";

const data = parseImportModule(import.meta.glob("./data/*.data.ts", { eager: true }));
</script>

<template>
  <tabs-design name="personality-design" :data="data">
    <template #alert>
      <alert>个性不仅表现在对角色的属性影响，还会影响剧情表现——角色往往会根据自己的个性在对话中做出选择。</alert>
    </template>
    <personality-dashboard />
  </tabs-design>
</template>

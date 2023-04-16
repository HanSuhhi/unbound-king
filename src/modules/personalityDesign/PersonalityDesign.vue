<script setup lang="ts">
import { computed } from "vue";
import { parseImportModule } from "../../composables/ci/importModule";
import { applyDataToModule } from "../../composables/experience/codeChanged";
import personalityDashboard from "./components/PersonalityDashboard.vue";
import CodeCanvas from "@/components/codeCanvas/CodeCanvas.vue";
import TabsListItem from "@/components/tabs/TabsListItem.vue";
import { defineDataTemplate } from "@/composables/ci/dataTemplate";
import { defineCommonLayout } from "@/composables/components/commonLayout";
import { defineCommonTabs } from "@/composables/components/commonTabs";
import { defineTabsData } from "@/composables/components/tabsList";

const { COMP: Layout } = defineCommonLayout("game-icon");
const { COMP, read, state } = defineCommonTabs("game-icon");

const data = parseImportModule(import.meta.glob("./data/*.data.ts", { eager: true }));
const { list, activeItemData } = defineTabsData(data, state);

const codeTemplate = computed(() => [defineDataTemplate(JSON.stringify(activeItemData.value))]);
const { code } = applyDataToModule(activeItemData, codeTemplate);
</script>

<template>
  <base-layout ref="Layout" class="personality-design">
    <template #aside>
      <code-canvas :code="code" />
    </template>
    <base-tabs ref="COMP">
      <template #list>
        <tabs-list-item v-for="(item, key) in list" :key="key" :message="item" />
      </template>
      <template v-for="panel in read?.panels" :key="panel" #[panel]>
        <personality-dashboard />
      </template>
    </base-tabs>
  </base-layout>
</template>

<style scoped>
.game-icon {
  transition: all var(--transition-prop);
}
</style>

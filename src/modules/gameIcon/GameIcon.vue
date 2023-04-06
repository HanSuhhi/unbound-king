<script setup lang="ts">
import CodeCanvas from "@/components/codeCanvas/CodeCanvas.vue";
import TabsListItem from "@/components/tabs/TabsListItem.vue";
import { defineDataTemplate } from "@/composables/ci/dataTemplate";
import { defineCommonLayout } from "@/composables/components/commonLayout";
import { defineCommonTabs } from "@/composables/components/commonTabs";
import { defineTabsData } from "@/composables/components/tabsList";
import { unocssInclude } from "@/composables/constant/unocssInclude";
import { computed } from "vue";
import { parseImportModule } from "../../composables/ci/importModule";
import { applyDataToModule } from "../../composables/experience/codeChanged";
import IconDashboard from "./components/IconDashboard.vue";
import "./game-icon.css";

const { COMP: Layout } = defineCommonLayout("game-icon");
const { COMP, read, state } = defineCommonTabs("game-icon");

const data = parseImportModule(import.meta.glob("./data/*.data.ts", { eager: true }));
const { list, activeItemData } = defineTabsData(data, state);

const codeTemplate = computed(() => [unocssInclude, defineDataTemplate(JSON.stringify(activeItemData.value))]);
const { code } = applyDataToModule(activeItemData, codeTemplate);
</script>

<template>
  <base-layout ref="Layout" class="game-icon">
    <template #aside>
      <CodeCanvas :code="code" />
    </template>
    <base-tabs ref="COMP">
      <template #list>
        <TabsListItem v-for="(item, key) in list" :key="key" :message="item" />
      </template>
      <template v-for="panel in read?.panels" :key="panel" #[panel]>
        <icon-dashboard />
      </template>
    </base-tabs>
  </base-layout>
</template>

<style scoped>
.game-icon {
  transition: all var(--transition-prop);
}
</style>

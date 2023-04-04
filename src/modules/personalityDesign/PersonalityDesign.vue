<script setup lang="ts">
import CodeCanvas from "@/components/codeCanvas/CodeCanvas.vue";
import TabsListItem from "@/components/tabs/TabsListItem.vue";
import { defineDataTemplate } from "@/composables/ci/dataTemplate";
import { defineCommonLayout } from "@/composables/components/commonLayout";
import { defineCommonTabs } from "@/composables/components/commonTabs";
import { defineTabsData } from "@/composables/components/tabsList";
import { capitalize } from "@/composables/router/text/capitalize";
import { CLayout, CTabs } from "csss-ui";
import { find } from "lodash-es";
import { computed, ref, provide } from "vue";
import { parseImportModule } from "../../composables/ci/importModule";
import { applyDataToModule } from "../../composables/experience/codeChanged";
import personalityDashboard from "./components/PersonalityDashboard.vue";

const { COMP: Layout } = defineCommonLayout("game-icon");
const { COMP, read, state } = defineCommonTabs("game-icon");

const data = parseImportModule(import.meta.glob("./data/*.data.ts", { eager: true }));
const { list, activeItem, activeItemData } = defineTabsData(data, state);

const codeTemplate = computed(() => [defineDataTemplate(JSON.stringify(activeItemData.value))]);
const { code } = applyDataToModule(activeItemData, codeTemplate);
</script>

<template>
  <c-layout ref="Layout" class="personality-design">
    <template #aside>
      <CodeCanvas :code="code" />
    </template>
    <c-tabs ref="COMP">
      <template #list>
        <TabsListItem v-for="(item, key) in list" :key="key" :message="item" />
      </template>
      <template v-for="panel in read?.panels" :key="panel" #[panel]>
        <personality-dashboard />
      </template>
    </c-tabs>
  </c-layout>
</template>

<style scoped>
.game-icon {
  transition: all var(--transition-prop);
}
</style>

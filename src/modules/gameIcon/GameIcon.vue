<script setup lang="ts">
import CodeCanvas from "@/components/codeCanvas/CodeCanvas.vue";
import TabsListItem from "@/components/tabs/TabsListItem.vue";
import { defineDataTemplate } from "@/composables/ci/dataTemplate";
import { defineCommonLayout } from "@/composables/components/commonLayout";
import { defineCommonTabs } from "@/composables/components/commonTabs";
import { defineTabsOptions } from "@/composables/components/tabsList";
import { unocssInclude } from "@/composables/constant/unocssInclude";
import { CLayout, CTabs } from "csss-ui";
import { find } from "lodash-es";
import { computed, provide, ref } from "vue";
import { parseImportModule } from "../../composables/ci/importModule";
import { applyDataToModule } from "../../composables/codeChanged";
import IconDashboard from "./components/IconDashboard.vue";
import "./game-icon.css";

const { COMP: Layout } = defineCommonLayout("game-icon");
const { COMP, read, state } = defineCommonTabs("game-icon");
provide("changed", ref(false));

const data = parseImportModule(import.meta.glob("./data/*.data.ts", { eager: true }));
const list = ref(defineTabsOptions(data));

const active = computed(() => find(list.value, (listItem) => listItem.index === state.value?.active));
const activeIcons = computed(() => active.value?.injectData);
const activeItem = computed(() => active.value?.name);

const codeTemplate = computed(() => [unocssInclude, defineDataTemplate(JSON.stringify(activeIcons.value))]);
const { code } = applyDataToModule(activeIcons, codeTemplate);

provide("active-key", activeItem);
</script>

<template>
  <c-layout ref="Layout" class="game-icon">
    <template #aside>
      <CodeCanvas :code="code" />
    </template>
    <c-tabs ref="COMP">
      <template #list>
        <TabsListItem v-for="(item, key) in list" :key="key" :message="item" />
      </template>
      <template v-for="panel in read?.panels" :key="panel" #[panel]>
        <icon-dashboard />
      </template>
    </c-tabs>
  </c-layout>
</template>

<style scoped>
.game-icon {
  transition: all var(--transition-prop);
}
</style>

<script setup lang="ts">
import CodeCanvas from "@/components/codeCanvas/CodeCanvas.vue";
import TabsListItem from "@/components/tabs/TabsListItem.vue";
import { defineCommonLayout } from "@/composables/components/commonLayout";
import { defineCommonTabs } from "@/composables/components/commonTabs";
import { defineTabsOptions } from "@/composables/components/tabsList";
import { unocssInclude } from "@/composables/constant/unocssInclude";
import { CLayout, CTabs } from "csss-ui";
import { find, keys } from "lodash-es";
import { computed, provide, ref, watch } from "vue";
import { parseImportModule } from "../../composables/ci/importModule";
import { formatCodeString } from "../../composables/formatCodeString";
import IconDashboard from "./components/IconDashboard.vue";
import "./icon-setting.css";
import { defineDataTemplate } from "@/composables/ci/dataTemplate";

const { COMP: Layout } = defineCommonLayout("icon-setting");
const { COMP, read, state } = defineCommonTabs("icon-setting");
provide("changed", ref(false));

const data = parseImportModule(import.meta.glob("./data/*.data.ts", { eager: true }));
const list = ref(defineTabsOptions(data));

const active = computed(() => find(list.value, (listItem) => listItem.index === state.value?.active));
const activeIcons = computed(() => active.value?.injectData);
const activeItem = computed(() => active.value?.tranlator);

const code = ref(``);
const changed = ref(false);
watch(
  activeIcons,
  async (_) => {
    code.value = formatCodeString(unocssInclude, defineDataTemplate(JSON.stringify(activeIcons.value)));
  },
  { deep: true },
);

provide("active-icons", activeIcons);
provide("active-key", activeItem);
provide("changed", changed);
</script>

<template>
  <c-layout ref="Layout" class="icon-setting">
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
.icon-setting {
  transition: all var(--transition-prop);
}
</style>

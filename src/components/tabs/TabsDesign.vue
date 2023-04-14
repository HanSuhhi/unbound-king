<script setup lang='ts'>
import { computed } from "vue";
import TabsListItem from "./TabsListItem.vue";
import { defineCommonLayout } from "@/composables/components/commonLayout";
import { defineCommonTabs } from "@/composables/components/commonTabs";
import { applyDataToModule } from "@/composables/experience/codeChanged";
import { defineTabsData } from "@/composables/components/tabsList";
import CodeCanvasVue from "@/components/codeCanvas/CodeCanvas.vue";
import { defineDataTemplate } from "@/composables/ci/dataTemplate";
import { unocssInclude } from "@/composables/constant/unocssInclude";

const props = defineProps<{
  name: string
  data: Dictionary<any>
  unocss?: boolean
}>();

const { COMP: Layout } = defineCommonLayout(props.name);
const { COMP, read, state } = defineCommonTabs(props.name);

const { list, activeItemData } = defineTabsData(props.data, state);

const codeTemplate = computed(() => {
  const template = [defineDataTemplate(activeItemData.value)];
  if (props.unocss) template.unshift(unocssInclude);
  return template;
});
const { code } = applyDataToModule(activeItemData, codeTemplate);
</script>

<template>
  <base-layout ref="Layout" class="page-transition" :class="name">
    <template #aside>
      <code-canvas-vue :code="code" />
    </template>
    <base-tabs ref="COMP">
      <template #list>
        <tabs-list-item v-for="(item, key) in list" :key="key" :message="item" />
      </template>
      <template v-for="panel in read?.panels" :key="panel" #[panel]>
        <slot />
      </template>
    </base-tabs>
  </base-layout>
</template>

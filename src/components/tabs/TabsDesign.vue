<script setup lang='ts'>
import { computed, useSlots } from "vue";
import TabsListItem from "./TabsListItem.vue";
import { defineCommonLayout } from "@/composables/components/commonLayout";
import { defineCommonTabs } from "@/composables/components/commonTabs";
import { applyDataToModule } from "@/composables/experience/codeChanged";
import { defineTabsData } from "@/composables/components/tabsList";
import CodeCanvasVue from "@/components/codeCanvas/CodeCanvas.vue";
import { defineDataTemplate } from "@/composables/ci/dataTemplate";
import { unocssInclude } from "@/composables/constant/unocssInclude";
import QuestionExplanation from "@/components/experience/QuestionExplanation.vue";

const props = defineProps<{
  name: string
  data: Dictionary<any>
  unocss?: boolean
}>();
const slots = useSlots();

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
    <div class="tabs-design_body">
      <div v-if="slots.alert" class="tabs-design_alert">
        <slot name="alert" />
      </div>
      <base-tabs ref="COMP">
        <template #list>
          <tabs-list-item v-for="(item, key) in list" :key="key" :message="item" />
        </template>
        <template v-for="panel in read?.panels" :key="panel" #[panel]>
          <slot />
        </template>
        <question-explanation icon-class="tabs-design_question">
          如果没有对应包名。请在相应的 src/modules/data 文件夹下新建 packageName.data.ts 的文件。
        </question-explanation>
      </base-tabs>
    </div>
  </base-layout>
</template>

<style scoped>
.tabs-design_body {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.tabs-design_alert {
  width: 100%;
  margin-bottom: var(--base-margin);
}

:deep(.tabs-design_question) {
  position: absolute;
  top: calc(var(--font-body) / 3);
  right: 0;
  cursor: pointer;
}
</style>

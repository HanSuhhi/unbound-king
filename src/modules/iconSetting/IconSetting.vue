<script setup lang='ts'>
import CodeCanvas from '@/components/codeCanvas/CodeCanvas.vue';
import TabsListItem from "@/components/tabs/TabsListItem.vue";
import { defineCommonLayout } from "@/composables/components/commonLayout";
import { defineCommonTabs } from "@/composables/components/commonTabs";
import { defineTabsList } from "@/composables/components/tabsList";
import { provide, ref } from "vue";

const { COMP: Layout  } = defineCommonLayout("attribute-value");
const { COMP, read } = defineCommonTabs("icon-setting");

provide("changed", ref(false));

const data = import.meta.glob("./data/*.data.ts", {eager: true});
const items = defineTabsList(data, {
  test: {
    title: "测试",
    icon: ""
  }
});
</script>

<template>
  <c-layout ref="Layout" class="icon-setting">
    <template #aside>
      <CodeCanvas code="{codeCanvasCode.value}" />
    </template>
    <c-tabs ref="COMP">
      <template #list>
        <TabsListItem v-for="item in items" :key="item.title" :message="item" />
      </template>
      <template v-for="(panel, index) in read?.panels" :key="panel" #[panel]>
        <p>{{ index }}</p>
      </template>
    </c-tabs>
  </c-layout>
</template>

<style scoped>
.icon-setting {
  transition: all var(--transition-prop);
}
</style>


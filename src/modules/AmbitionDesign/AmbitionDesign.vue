<script setup lang='ts'>
import AmbitionMain from "./comopnents/AmbitionMain.vue";
import { parseImportModule } from "@/composables/ci/importModule";
import TabsDesign from "@/components/tabs/TabsDesign.vue";
import alert from "@/components/alert/alert";

const data = parseImportModule(import.meta.glob("./data/*.ambition.ts", { eager: true }));
</script>

<template>
  <tabs-design name="ambition-design" :data="data">
    <template #alert>
      <alert>
        抱负需包含<strong>基础加成</strong>，<strong>战斗加成</strong>以及<strong> 长期加成 </strong>。
      </alert>
    </template>
    <ambition-main />
  </tabs-design>
</template>

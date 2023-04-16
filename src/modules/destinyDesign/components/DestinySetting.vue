<script setup lang='ts'>
import { defineCommonTabs } from "@/composables/components/commonTabs";

const { COMP: Tabs, read } = defineCommonTabs("destiny-setting", false);
</script>

<template>
  <base-tabs ref="Tabs" class="destiny-setting">
    <template #list>
      <p>todo</p>
    </template>
    <template v-for="panel in read?.panels" :key="panel" #[panel]>
      <p>{{ panel }}</p>
    </template>
  </base-tabs>
  <!-- <div class="destiny-setting">
    <div class="destiny-setting_box">
      .
    </div>
  </div> -->

  <!-- <title-card class="destiny-detail_settlement destiny-detail_sub">
  <section class="destiny-detail_setting">
      <template #title>
        聚落
      </template>
      <template #subtitle>
        <icon name="warning" style="margin-right: var(--mini);" />
        该种族出身可能获得以下的技能
      </template>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ratione iure eligendi consectetur veritatis cum odit, ut ea at distinctio dolor maiores illum dolorem sint eaque necessitatibus amet illo fugit.
    </title-card>
    <title-card class="destiny-detail_class destiny-detail_sub">
      <template #title>
        职业
      </template>
      <template #subtitle>
        <icon name="warning" style="margin-right: var(--mini);" />
        该种族出身可能获得以下的职业
      </template>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ratione iure eligendi consectetur veritatis cum odit, ut ea at distinctio dolor maiores illum dolorem sint eaque necessitatibus amet illo fugit.
    </title-card>
    <title-card class="destiny-detail_technique destiny-detail_sub">
      <template #title>
        心法
      </template>
      <template #subtitle>
        <icon name="warning" style="margin-right: var(--mini);" />
        该种族工匠可能拥有以下的建筑工艺
      </template>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ratione iure eligendi consectetur veritatis cum odit, ut ea at distinctio dolor maiores illum dolorem sint eaque necessitatibus amet illo fugit.
    </title-card>
    <title-card class="destiny-detail_skill destiny-detail_sub">
      <template #title>
        技能
      </template>
      <template #subtitle>
        <icon name="warning" style="margin-right: var(--mini);" />
        该种族工匠可能拥有以下的建筑工艺
      </template>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ratione iure eligendi consectetur veritatis cum odit, ut ea at distinctio dolor maiores illum dolorem sint eaque necessitatibus amet illo fugit.
  </section>
    </title-card> -->
</template>

<style scoped>
.destiny-setting {
  position: relative;
  flex-direction: row;
  height: 15%;
}

.destiny-setting :deep(.destiny-setting_list) {
  display: flex;
  flex-wrap: wrap;
}

.destiny-setting :deep(.destiny-setting_item) {
  width: 50%;
}
</style>

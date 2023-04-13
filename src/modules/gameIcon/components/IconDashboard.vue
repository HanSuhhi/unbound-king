<script setup lang="ts">
import { DATA_BaseIcons } from "@/modules/baseIcon/data/baseIcon.data";
import type { ComputedRef } from "vue";
import { inject } from "vue";
import { defineCommonDialog } from "../../../composables/components/commonDialog";
import AddIconDialog from "./AddIconDialog.vue";
import IconBlock from "../../baseIcon/components/IconBlock.vue";

const { modalShow } = defineCommonDialog();

const icons = inject<ComputedRef<GameIcon[]>>("data");
</script>

<template>
  <add-icon-dialog />
  <article class="icon-dashboard">
    <icon-block v-for="icon in icons" :key="icon.translator[0]" :icon="icon" class="icon-dashboard_block" />
    <icon-block class="icon-dashboard_block" :icon="DATA_BaseIcons['plus'] as BaseIcon" not-copy @click="modalShow = true" />
  </article>
</template>

<style scoped>
.icon-dashboard {
  display: flex;
  flex-wrap: wrap;
  border-left: var(--border);
}

.icon-dashboard_block {
  box-sizing: border-box;
}
</style>

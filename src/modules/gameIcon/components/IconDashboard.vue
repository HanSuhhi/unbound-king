<script setup lang="ts">
import { DATA_BaseIcons } from "@/modules/baseIcon/data/baseIcon.data";
import type { ComputedRef } from "vue";
import { inject } from "vue";
import { defineCommonDialog } from "../../../composables/components/commonDialog";
import AddIconDialog from "./AddIconDialog.vue";
import IconBlock from "../../baseIcon/components/IconBlock.vue";

const { openDialog } = defineCommonDialog("game-icon");

const icons = inject<ComputedRef<GameIcon[]>>("data");
</script>

<template>
  <add-icon-dialog />
  <article class="icon-dashboard">
    <icon-block v-for="icon in icons" :key="icon.translator.key" :icon="icon" class="icon-dashboard_block" />
    <icon-block class="icon-dashboard_block" :icon="DATA_BaseIcons.plus" @click="openDialog" />
  </article>
</template>

<style scoped>
.icon-dashboard {
  --column-count: 12;

  display: grid;
  grid-template-columns: repeat(var(--column-count), 1fr);
}

.icon-dashboard_block {
  box-sizing: border-box;
}

.icon-dashboard_block:last-child {
  border-right: 1px solid var(--border-color);
}

.icon-dashboard_block:nth-child(12n) {
  border-right: 1px solid var(--border-color);
}
</style>

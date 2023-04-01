<script setup lang="ts">
import BuffExplanation from "@/components/BuffExplanation.vue";
import { DATA_BaseIcons } from "@/modules/baseIcon/data/baseIcon.data";
import { NPopover } from "naive-ui";
import type { ComputedRef } from "vue";
import { inject, ref } from "vue";
import { defineCommonDialog } from "../../../composables/components/commonDialog";
import IconBlock from "../../baseIcon/components/IconBlock.vue";
import AddPersonalityDialog from "./AddPersonalityDialog.vue";
import PersonalityBlock from "./personalityBlock.vue";

const { openDialog } = defineCommonDialog("personality-design");

const data = inject<ComputedRef<Personality[]>>("data");

const activeData = ref<Personality>();
</script>

<template>
  <add-personality-dialog />
  <article class="personality-dashboard">
    <template v-for="personality in data" :key="personality.translator.key">
      <n-popover trigger="hover" placement="bottom">
        <template #trigger>
          <personality-block :personality="personality" class="personality-dashboard_block" @mouseover="activeData = personality" />
        </template>
        <BuffExplanation :buff-name="activeData?.id || ''" :buff-key="'personality'" />
      </n-popover>
    </template>
    <icon-block class="personality-dashboard_block" :icon="DATA_BaseIcons.plus" not-copy @click="openDialog" />
  </article>
</template>

<style scoped>
.personality-dashboard {
  --column-count: 12;

  display: grid;
  grid-template-columns: repeat(var(--column-count), 1fr);
}

.personality-dashboard_block {
  box-sizing: border-box;
}

.personality-dashboard_block:last-child {
  border-right: 1px solid var(--border-color);
}

.personality-dashboard_block:nth-child(12n) {
  border-right: 1px solid var(--border-color);
}
</style>

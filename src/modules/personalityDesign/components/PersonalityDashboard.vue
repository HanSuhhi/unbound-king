<script setup lang="ts">
import { NPopover } from "naive-ui";
import type { ComputedRef } from "vue";
import { inject, ref } from "vue";
import { defineCommonDialog } from "../../../composables/components/commonDialog";
import IconBlock from "../../baseIcon/components/IconBlock.vue";
import AddPersonalityDialog from "./AddPersonalityDialog.vue";
import PersonalityBlock from "./personalityBlock.vue";
import { DATA_BaseIcons } from "@/modules/baseIcon/data/baseIcon.data";
import BuffExplanation from "@/components/BuffExplanation.vue";

const { modalShow } = defineCommonDialog();

const data = inject<ComputedRef<Personality[]>>("data");

const activeData = ref<Personality>();
</script>

<template>
  <add-personality-dialog />
  <article class="personality-dashboard">
    <template v-for="personality in data" :key="personality.translator[0]">
      <n-popover trigger="hover" placement="bottom">
        <template #trigger>
          <personality-block :personality="personality" class="personality-dashboard_block" @mouseover="activeData = personality" />
        </template>
        <buff-explanation :buff-name="activeData?.id || ''" buff-key="personality" />
      </n-popover>
    </template>
    <icon-block class="personality-dashboard_block" :icon="DATA_BaseIcons.plus" not-copy @click="modalShow = true" />
  </article>
</template>

<style scoped>
.personality-dashboard {
  display: flex;
  flex-wrap: wrap;
  border-left: var(--border);
}

.personality-dashboard_block {
  box-sizing: border-box;
}
</style>

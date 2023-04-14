<script setup lang="ts">
import { DATA } from "@/composables/data";
import InlineMustache from "@/components/inlineMustache/InlineMustache.vue";

defineProps<{ buffName: string; buffKey: BuffsName }>();
</script>

<template>
  <ul class="ol-reset buff-explanation">
    <template v-for="buff of DATA.DATA_Buffs[buffKey].get(buffName)" :key="buff">
      <li class="buff-explanation_item">
        <span class="buff-explanation_index">•</span>
        <inline-mustache :text="buff.explanation || ''" />
      </li>
    </template>
  </ul>
</template>

<style scoped>
.buff-explanation_index {
  margin-right: var(--base-margin);
}
</style>

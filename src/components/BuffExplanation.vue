<script setup lang="ts">
import { DATA } from "@/composables/data";
import InlineMustache from "@/components/inlineMustache/InlineMustache.vue";

defineProps<{ buffName: string; buffKey: BuffsName }>();
</script>

<template>
  <ul class="ol-reset buff-explanation">
    <template v-for="buff of DATA.Buffs[buffKey].get(buffName)" :key="buff">
      <li class="buff-explanation_item">
        <span class="buff-explanation_index mr-bm">•</span>
        <inline-mustache :text="buff.explanation || ''" />
      </li>
    </template>
  </ul>
</template>

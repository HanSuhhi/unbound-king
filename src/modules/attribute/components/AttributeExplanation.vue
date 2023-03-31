<script setup lang="ts">
import { DATA } from "@/composables/data";
import InlineMustache from "@/components/InlineMustache.vue";

defineProps<{ buffs: Attribute["buffs"] }>();
</script>
<template>
  <ol class="ol-reset attribute-explanation">
    <template v-for="(buff, index) of buffs" :key="buff">
      <li class="attribute-explanation_item">
        <span class="attribute-explanation_index">{{ index + 1 }}.</span>
        <inline-mustache :text="DATA['DATA_Buffs'][buff].explanation || ''" />
      </li>
    </template>
  </ol>
</template>

<style scoped>
.attribute-explanation_index {
  margin-right: var(--base-margin);
}
</style>

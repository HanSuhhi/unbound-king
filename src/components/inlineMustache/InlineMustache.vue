<script setup lang="ts">
import { computed } from "vue";
import SpecialInlineBlock from "./SpecialInlineBlock";
import { parseMustacheString, parseMustacheString2 } from "@/composables/util/string";

const props = defineProps<{ text: string }>();
const showText = computed(() => parseMustacheString(props.text));
</script>

<template>
  <template v-for="str of showText" :key="str[0]">
    <component :is="str[1] ? 'strong' : 'span'" class="inline-musache_content">
      <template v-for="_str of parseMustacheString2(str[0])" :key="_str[0]">
        <span v-if="!_str[1]">{{ _str[0] }}</span>
        <special-inline-block v-else :text="_str[0]" />
      </template>
    </component>
  </template>
</template>

<style scoped>
@layer component {
  .inline-musache_content {
    filter: brightness(1.2);
  }

  span.inline-musache_content {
    color: var(--gray-bright-1);
  }
}
</style>
@/composables/util/mustache

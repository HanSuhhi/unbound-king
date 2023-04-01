<script setup lang="ts">
import { parseMustacheString, parseMustacheString2 } from "@/composables/text/mustache";
import { computed } from "vue";
import SpecialInlineBlock from "./SpecialInlineBlock";

const props = defineProps<{ text: string }>();
const showText = computed(() => parseMustacheString(props.text));
</script>

<template>
  <p inline class="p-reset inline-mustache">
    <template v-for="str of showText" :key="str[0]">
      <component :is="str[1] ? 'strong' : 'span'" class="inline-musache_content" flex_center>
        <template v-for="_str of parseMustacheString2(str[0])" :key="_str[0]">
          <template v-if="!_str[1]">{{ _str[0] }}</template>
          <special-inline-block v-else :text="_str[0]" />
        </template>
      </component>
    </template>
  </p>
</template>

<style scoped>
.inline-musache_content {
  display: inline-flex;
  line-height: var(--normal);
  filter: brightness(1.2);
}

span.inline-musache_content {
  color: var(--gray-bright-1);
}
</style>

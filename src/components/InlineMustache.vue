<script setup lang="ts">
import { parseMustacheString } from "@/composables/text/mustache";
import { computed } from "vue";

const props = defineProps<{ text: string }>();
const showText = computed(() => parseMustacheString(props.text));
setTimeout(() => {
  console.log("showText: ", showText);
}, 100);
</script>

<template>
  <p inline class="p-reset inline-mustache">
    <template v-for="str of showText" :key="str[0]">
      <component :is="str[1] ? 'strong' : 'span'" class="inline-musache_content">
        {{ str[0] }}
      </component>
    </template>
  </p>
</template>

<style scoped>
span.inline-musache_content {
  color: var(--gray);
}
</style>

<script setup lang="ts">
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-json";
import type { Ref } from "vue";
import { inject, onMounted, onUpdated, ref } from "vue";

const CodeRef = ref<HTMLElement>();
function highlight() {
  return Prism.highlightAllUnder(CodeRef.value!);
}
onMounted(highlight);
onUpdated(highlight);

const testData = inject<Ref>("test-data")!;
</script>

<template>
  <pre ref="CodeRef" class="creator-preview">
    <code class="creator-preview language-json">{{ testData }}</code>
  </pre>
</template>

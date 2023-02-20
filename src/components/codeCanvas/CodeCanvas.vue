<script setup lang='ts'>
import Prism from "prismjs";
import 'prismjs/components/prism-javascript';
import { ref, onMounted, onUpdated } from 'vue';

const code = `
const a = 1;
console.log(a);
`;

const CodeRef = ref<HTMLElement>();

const highlight = () => {
  Prism.highlightAllUnder(CodeRef.value!);
};

onMounted(highlight);
onUpdated(highlight);

</script>

<template>
  <pre ref="CodeRef" class="code-canvas">
    <span>language - javascript</span>
    <code class="language-javascript">{{ code }}</code>
    <footer class="code-canvas_footer">asd</footer>
  </pre>
</template>

<style scoped>
.code-canvas {
  --padding: var(--normal);

  position: relative;
  height: calc(100% - var(--padding) * 2);
  margin: 0;
  padding: var(--padding);
}

.code-canvas_footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: calc(100% - 2 * var(--padding));
  padding: var(--padding);
  background-color: var(--bg-color-bright-2);
}
</style>


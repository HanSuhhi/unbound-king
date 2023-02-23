<script setup lang='ts'>
import Prism from "prismjs";
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import { ref, onMounted, onUpdated } from 'vue';
import Operator from './components/Operator.vue';

type Props = { code: string, language?: "javascript" | "json" }

withDefaults(defineProps<Props>(), {
  code: "",
  language: "javascript"
});

const CodeRef = ref<HTMLElement>();

const highlight = () => {
  Prism.highlightAllUnder(CodeRef.value!);
};

onMounted(highlight);
onUpdated(highlight);

</script>

<template>
  <pre ref="CodeRef" class="code-canvas">
    <header class="code-canvas_header code-canvas_position">language {{ language }}</header>
    <code :class="`code-canvas_code language-${language}`">{{ code }}</code>
    <footer class="code-canvas_footer code-canvas_position">
      <operator />
    </footer>
  </pre>
</template>

<style scoped>
.code-canvas {
  --position-height: 7%;

  position: relative;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.code-canvas_position {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: var(--position-height);
  max-height: 3.5rem;
  background-color: var(--bg-color-bright-2);
}

.code-canvas_code {
  position: absolute;
  top: calc(var(--position-height));
  left: 0;
  width: 100%;
  height: calc(100% - 2 * var(--position-height));
  overflow: auto;
}

.code-canvas_footer {
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  border-top-left-radius: var(--normal);
}

.code-canvas_header {
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--normal);
  text-transform: capitalize;
}
</style>


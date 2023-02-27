<script setup lang='ts'>
import Extend from '@/components/Extend.vue';
import { useHtmlPropLint } from "@/composables/htmlPropLint";
import Prism from "prismjs";
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import { onMounted, onUpdated, ref } from 'vue';
import Operator from './components/Operator.vue';
import { useIconCollapse } from './composables/iconCollapse';

type Props = { code: string, language?: "javascript" | "json" }

withDefaults(defineProps<Props>(), {
  code: "",
  language: "javascript"
});

const CodeRef = ref<HTMLElement>();
const highlight = () => Prism.highlightAllUnder(CodeRef.value!);
onMounted(highlight);
onUpdated(highlight);

const [value, toggle] = useIconCollapse();
</script>

<template>
  <pre ref="CodeRef" class="code-canvas" :data-collapse="useHtmlPropLint(value)">
    <header class="code-canvas_header code-canvas_position">
      <extend class="code-canvas_icon" :data-reverse="useHtmlPropLint(!value)" @click="toggle" />
      language {{ language === 'javascript' ? 'typescript' : language }}
    </header>
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
  width: calc(100% + var(--base-margin));
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border: var(--border);
  transition: all var(--ani-time) ease;
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
  border-top: var(--border);
}

.code-canvas_header {
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--normal);
  text-transform: capitalize;
  border-bottom: var(--border);
}

.code-canvas[data-collapse] .code-canvas_footer *,
.code-canvas[data-collapse] .code-canvas_code {
  display: none;
}

.code-canvas_icon {
  cursor: pointer;
}
</style>


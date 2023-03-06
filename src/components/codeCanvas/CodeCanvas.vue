<script setup lang='ts'>
import Extend from '@/components/Extend.vue';
import { useDelayExtend } from '@/composables/delayExtend';
import { useHtmlPropLint } from "@/composables/htmlPropLint";
import Prism from "prismjs";
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import type { Ref } from 'vue';
import { onMounted, onUpdated, ref, computed, inject } from 'vue';
import { defineExtender } from '../../composables/Extender';
import Operator from './components/Operator.vue';
import { useCodeCanvasStatus, CodeCanvasStatus } from './composables/status';

type Props = { code: string, language?: "javascript" | "json",  }

const props = withDefaults(defineProps<Props>(), {
  code: "",
  language: "javascript",
  changed: false,
});

const CodeRef = ref<HTMLElement>();
const highlight = () => Prism.highlightAllUnder(CodeRef.value!);
onMounted(highlight);
onUpdated(highlight);

const isExtend = defineExtender();
const delayExtend = useDelayExtend(isExtend);

const changed = inject<Ref<boolean>>("changed")!;
const {copied, status} = useCodeCanvasStatus(changed);

function copy() {
  navigator.clipboard.writeText(props.code);
  copied.value = true;
}
</script>

<template>
  <pre ref="CodeRef" class="code-canvas extender" :data-collapse="useHtmlPropLint(!isExtend)">
    <header class="code-canvas_header code-canvas_position">
      <extend class="code-canvas_icon" :data-reverse="useHtmlPropLint(isExtend)" @click="isExtend = !isExtend" />
      <span v-show="delayExtend"> language {{ language === 'javascript' ? 'typescript' : language }} </span>
    </header>
    <code v-show="delayExtend" :class="`code-canvas_code language-${language}`">{{ code }}</code>
    <footer class="code-canvas_footer code-canvas_position" :class="{'code-canvas_double': status}">
      <span v-if="CodeCanvasStatus.Changed === status" class="code-canvas_text code-canvas_warning">文件已修改，牢记复制保存！</span>
      <span v-if="CodeCanvasStatus.Copied === status" class="code-canvas_text code-canvas_success">已复制</span>
      <operator v-show="delayExtend" @click="copy" />
    </footer>
  </pre>
</template>

<style scoped>
.code-canvas {
  --position-height: 7%;

  position: relative;
  box-sizing: border-box;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: var(--bg-color-bright-1);
  border: var(--border);
  transition: all var(--transition-prop);
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
  align-items: center;
  justify-content: flex-end;
  border-top: var(--border);
}

.code-canvas_double {
  justify-content: space-between;
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

.code-canvas_icon {
  cursor: pointer;
}

.code-canvas_warning {
  color: var(--error-color);
}

.code-canvas_success {
  color: var(--success-color);
}

.code-canvas_text {
  margin-left: var(--base-margin);
}
</style>


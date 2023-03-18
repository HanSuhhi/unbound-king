<script setup lang="ts">
import typeButton from "@/components/typeButton/TypeButton.vue";
import { throttle } from "lodash-es";
import { useMessage } from "naive-ui";
import type { Ref } from "vue";
import { inject, ref } from "vue";

const creator = inject<Ref<Creator>>("creator");
const message = useMessage();
defineProps<{ plugins: CreatorPlugin[] }>();

const selectedPlugin = ref<CreatorPlugin>();

const addPlugin = throttle(() => {
  if (!selectedPlugin.value) return message!.info("请选择一个创造器插件");
  creator?.value.plugins.push(selectedPlugin.value!);
}, 500);
</script>

<template>
  <article class="step-controller">
    <section class="step-controller_add">
      <el-select v-model="selectedPlugin" placeholder="请选择新增插件">
        <el-option v-for="plugin in plugins" :key="plugin.translator.key" :label="plugin.translator.title" :value="plugin" />
      </el-select>
      <type-button @click="addPlugin">新增节点</type-button>
    </section>
  </article>
</template>

<style scoped>
.step-controller {
  padding: var(--base-margin);
  background-color: var(--bg-color-bright-2);
  border: var(--border);
  border-radius: var(--border-radius);
  filter: brightness(1.2);
}

.step-controller_add {
  display: flex;
  align-items: center;
}
</style>
